import { useState } from "react";
import Folder from "./components/folder";
import folderExplorerData from "./data/folderExplorerData";
import useTraverseHook from "./hooks/useTraverseHook";

function App() {
  const [explorer, setExplorer] = useState(folderExplorerData);
  const { insertNode } = useTraverseHook();

  const handleInsertNode = ({ folderId, item, isFolder }) => {
    const finalExplorer = insertNode({
      tree: explorer,
      folderId,
      item,
      isFolder,
    });

    setExplorer(finalExplorer);
  };

  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      <Folder explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
