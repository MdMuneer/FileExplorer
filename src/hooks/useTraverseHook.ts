const useTraverseHook = () => {
  const insertNode = ({ tree, folderId, item, isFolder }) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Math.random(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
    }
    return tree;
  };
  return { insertNode };
};

export default useTraverseHook;
