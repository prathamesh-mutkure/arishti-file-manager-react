import {
  Avatar,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllFiles } from "../store/filesAction";
import { AppDispatch, RootState } from "../store/index.store";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files.files);

  useEffect(() => {
    dispatch(getAllFiles());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth="md">
        {/* <Grid container>
          {files.map((file: any) => {
            return (
              <Grid item xs={12}>
                <div>{file.filename}</div>
              </Grid>
            );
          })}
        </Grid> */}
        <List>
          {files.map((file: any) => {
            return <FileItem filename={file.filename} id={file._id} />;
          })}
        </List>
      </Container>
    </div>
  );
};

interface FileItemProps {
  filename: String;
  id: String;
}

const FileItem: React.FC<FileItemProps> = ({ filename, id }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="delete">
            <DownloadRoundedIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <EditRoundedIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
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
