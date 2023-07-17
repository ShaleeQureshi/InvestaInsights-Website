import React, { useEffect, useState } from "react";
import { storage } from "../scripts/firebase/config";
import { ref, listAll } from "firebase/storage";

const FileTable = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const storageRef = ref(storage);
    const listRef = ref(storage, "/");

    listAll(listRef).then((res) => {
      console.log(res);
      const files = res.items.map((item) => ({
        name: item.name,
        size: item.size,
        downloadUrl: "", // Placeholder, will be updated later
      }));
      // Update the component state
      setFileList(files);
      console.log(files);

      // Retrieve download URLs for each file
      res.items.forEach((item, index) => {
        item.getDownloadURL().then((url) => {
          files[index].downloadUrl = url;
          setFileList([...files]);
        });
      });
    });
  }, []);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = ""; // Set the desired file name here
    link.click();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        {fileList.map((file) => (
          <tr key={file.name}>
            <td onClick={() => handleDownload(file.downloadUrl)}>
              {file.name}
            </td>
            <td>{file.size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FileTable;
