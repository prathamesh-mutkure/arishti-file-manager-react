import axios, { AxiosResponse } from "axios";
import { Endpoints } from "../constants/endpoints";
import { filesActions } from "./filesSlice";
import { AppDispatch } from "./index.store";

export const uploadFile = () => {
  // TODO: Upload Here
};

export const getFile = (id: String) => {
  return (dispatch: AppDispatch) => {
    axios
      .get(`${Endpoints.getFile}/${id}`)
      .then((res: AxiosResponse) => {
        console.log(res.data);

        return res.data;
      })
      .catch((err: any) => {
        console.log("Error getting file: ", err);
      });
  };
};

export const getAllFiles = () => {
  return (dispatch: AppDispatch) => {
    axios.get(Endpoints.getFiles).then((res: AxiosResponse) => {
      dispatch(filesActions.setFiles(res.data));
    });
  };
};

export const renameFile = (id: String) => {
  return (dispatch: any) => {
    axios
      .patch(`${Endpoints.patchFile}/${id}`)
      .then((res: AxiosResponse) => {
        dispatch(getAllFiles());
      })
      .catch((err: any) => {
        console.log("Error renaming file: ", err);
      });
  };
};

export const deleteFile = (id: String) => {
  return (dispatch: any) => {
    axios
      .delete(`${Endpoints.deleteFile}/${id}`)
      .then((res: AxiosResponse) => {
        dispatch(getAllFiles());
      })
      .catch((err: any) => {
        console.log("Error deleting file: ", err);
      });
  };
};
