import { useState } from "react";

import styles from "./folder.module.css";

const Folder = ({ explorer, handleInsertNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setIsExpanded(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const onAddNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode({
        folderId: explorer.id,
        item: e.target.value,
        isFolder: showInput.isFolder,
      });
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <div className={styles.container}>
      {explorer.isFolder ? (
        <>
          <div className={styles.element} onClick={handleExpand}>
            🗂️ {explorer.name}
            <div className={styles.btns}>
              <button
                onClick={(e) => handleNewFolder(e, true)}
                className={styles.btn}
              >
                + Folder
              </button>
              <button
                onClick={(e) => handleNewFolder(e, false)}
                className={styles.btn}
              >
                + File
              </button>
            </div>
          </div>
          <div>
            {showInput.visible && (
              <div className={styles.inputContainer}>
                <span> {showInput.isFolder ? "🗂️" : "📂"}</span>
                <input
                  className={styles.input}
                  onKeyDown={(e) => onAddNewFolder(e)}
                  placeholder="Enter name"
                  autoFocus
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                />
              </div>
            )}
            {isExpanded &&
              explorer.items.map((item: any) => {
                return <Folder key={item.id} explorer={item} />;
              })}
          </div>
        </>
      ) : (
        <span className={styles.element}>📂 {explorer.name}</span>
      )}
    </div>
  );
};

export default Folder;
