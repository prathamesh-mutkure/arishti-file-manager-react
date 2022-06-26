import { Container, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFile, getAllFiles, renameFile } from "../store/filesAction";
import { AppDispatch, RootState } from "../store/index.store";
import FileListItem from "./widgets/file-list-item";
import FileRenameModal from "./widgets/file-rename-modal";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files.files);
  const [isOpen, setIsOpen] = useState(false);
  const [fileToRename, setFileToRename] = useState<any | null>(null);

  useEffect(() => {
    dispatch(getAllFiles());
  }, [dispatch]);

  const onDeleteClick = (id: String) => {
    dispatch(deleteFile(id));
  };

  const onRenameClick = (file: any) => {
    setFileToRename(file);
    setIsOpen(true);
  };

  const handleClose = () => {
    setFileToRename(null);
    setIsOpen(false);
  };

  const handleRename = (id: String, newFileName: String) => {
    dispatch(renameFile(id, newFileName, handleClose));
  };

  return (
    <div>
      <FileRenameModal
        isOpen={isOpen}
        handleClose={handleClose}
        id={fileToRename?._id}
        fileName={fileToRename?.filename}
        handleRename={handleRename}
      />

      <Container maxWidth="md">
        <List>
          {files.map((file: any) => {
            return (
              <FileListItem
                filename={file.filename}
                id={file._id}
                onDelete={onDeleteClick}
                onRename={() => onRenameClick(file)}
              />
            );
          })}
        </List>
      </Container>
    </div>
  );
};

export default Home;
