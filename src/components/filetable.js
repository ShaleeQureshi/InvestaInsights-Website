import React, { useCallback, useEffect, useState } from "react";
import { storage } from "../scripts/firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Button } from "react-bootstrap";
import { TreeItem, TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { HashLoader } from "react-spinners";

const FileTable = (props) => {
  const [fileList, setFileList] = useState({});
  const listRef = ref(storage, props.listRef);
  const [reload, setReload] = useState(0);

  const forceUpdate = () => {
    setReload(reload + 1);
  };

  const allFiles = async (listRef) => {
    const all_files = {
      name: listRef.fullPath,
      items: [],
    };

    try {
      const res = await listAll(listRef);

      for (const subfolder of res.prefixes) {
        const subfolderMap = await allFiles(subfolder);
        all_files.items.push(subfolderMap);
      }

      for (const file of res.items) {
        all_files.items.push({
          name: file.name,
          type: "file",
          fullPath: file.fullPath,
        });
      }
      return all_files;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    allFiles(listRef)
      .then((result) => {
        setFileList(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.name}
      nodeId={nodes.name}
      label={
        nodes.name
          ? nodes.name.split("/")[nodes.name.split("/").length - 1]
          : null
      }
      onClick={() => {
        if (
          nodes.fullPath !== undefined &&
          (nodes.fullPath.endsWith(".") ||
            nodes.fullPath.endsWith(".docx") ||
            nodes.fullPath.endsWith(".doc") ||
            nodes.fullPath.endsWith(".xlsx") ||
            nodes.fullPath.endsWith(".csv") ||
            nodes.fullPath.endsWith(".jpeg") ||
            nodes.fullPath.endsWith(".jpg") ||
            nodes.fullPath.endsWith(".png") ||
            nodes.fullPath.endsWith(".pdf"))
        ) {
          getDownloadURL(ref(storage, nodes.fullPath)).then((url) => {
            window.open(url, "_blank");
          });
        }
      }}>
      {Array.isArray(nodes.items)
        ? nodes.items.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <div>
      <Button
        className="mb-2 w-100"
        variant="outline-dark"
        onClick={forceUpdate}>
        Reload
      </Button>
      <TreeView
        key={reload}
        className="files pb-2 pt-2"
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
        }}>
        {renderTree(fileList)}
      </TreeView>
    </div>
  );
};

export default FileTable;
