import { configureStore } from "@reduxjs/toolkit";
import filesSlice from "./filesSlice";

const store = configureStore({
  reducer: {
    files: filesSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
