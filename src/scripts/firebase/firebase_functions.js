import { auth } from "./config";
import {
  ErrorFn,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { ref, uploadBytes, deleteObject, listAll } from "@firebase/storage";
import { storage } from "./config";

const login_user = async (email, password) => {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("***Login Successful***");
    return true;
  } catch (error) {
    console.log("***Login Error***");
    return false;
  }
};

const upload_file = async (filePath, files, isDir) => {
  for (const index in files) {
    const file = files[index];
    if (file.name != undefined && file.name.includes(".")) {
      const storageRef = ref(storage, filePath + "/" + file.name);
      uploadBytes(storageRef, file).catch((err) => {
        alert("There was an unexpected error: " + err);
      });
    }
  }
  alert("Upload process has been completed");
};

const delete_files = async (filePath, directory) => {
  console.log(directory);

  if (directory == "on") {
    const dirRef = ref(storage, filePath);
    const items = await listAll(dirRef);
    await Promise.all(
      items.items.map(async (item) => {
        await deleteObject(item).catch((err) => {
          alert(
            "There was an unexpected error deleting: " +
              item.fullPath +
              "\n" +
              err
          );
        });
      }),
      items.prefixes.map(async (item) => {
        await deleteObject(item);
      })
    );
    alert("The deletion process has been completed");
  } else {
    const storageRef = ref(storage, filePath + "/");
    deleteObject(storageRef)
      .then(() => {
        alert("File has been deleted");
      })
      .catch((err) => {
        alert("There was an unexpected error: " + err);
      });
  }
};

const firebase_functions = {
  login_user,
  upload_file,
  delete_files,
};

export default firebase_functions;
