import { auth } from "./config";
import {
  ErrorFn,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const login_user = async (email, password) => {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("***Login Successful***");
    console.log(userCred);
    return true;
  } catch (error) {
    console.log("***Login Error***");
    console.log(error);
    return false;
  }
};

const firebase_functions = {
  login_user,
};

export default firebase_functions;
