import axios, { AxiosResponse } from "axios";
import { Endpoints } from "../constants/endpoints";
import { filesActions } from "./filesSlice";
import { AppDispatch } from "./index.store";

export const uploadFile = () => {
  // Upload Here
};

export const getAllFiles = () => {
  return (dispatch: AppDispatch) => {
    axios.get(Endpoints.getFiles).then((res: AxiosResponse) => {
      console.log(res.data);

      dispatch(filesActions.setFiles(res.data));
    });
  };
};

export const renameFile = () => {
  return (dispatch: any) => {
    // Get Req Here
  };
};

export const deleteFile = () => {
  return (dispatch: any) => {
    // Get Req Here
  };
};
