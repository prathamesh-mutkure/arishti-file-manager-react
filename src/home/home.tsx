import {
  Avatar,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFile, getAllFiles } from "../store/filesAction";
import { AppDispatch, RootState } from "../store/index.store";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Endpoints } from "../constants/endpoints";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files.files);

  useEffect(() => {
    dispatch(getAllFiles());
  }, [dispatch]);

  const onDelete = (id: String) => {
    dispatch(deleteFile(id));
  };

  const onRename = (id: String) => {};

  // TODO: Add Rename Functionality

  return (
    <div>
      <Container maxWidth="md">
        <List>
          {files.map((file: any) => {
            return (
              <FileItem
                filename={file.filename}
                id={file._id}
                onDelete={onDelete}
              />
            );
          })}
        </List>
      </Container>
    </div>
  );
};

// TODO: Put into seperate file

interface FileItemProps {
  filename: String;
  id: String;
  onDelete: (id: String) => void;
}

const FileItem: React.FC<FileItemProps> = ({ filename, id, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <Link
            href={`${Endpoints.backendUrl}${Endpoints.getFile}/${id}`}
            target="_blank"
            download={true}
          >
            <DownloadRoundedIcon />
          </Link>
          <IconButton
            style={{ marginLeft: "1rem" }}
            edge="end"
            aria-label="edit"
          >
            <EditRoundedIcon />
          </IconButton>
          <IconButton
            style={{ marginLeft: "1rem" }}
            edge="end"
            aria-label="delete"
            onClick={() => onDelete(id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={filename} />
    </ListItem>
  );
};

export default Home;
