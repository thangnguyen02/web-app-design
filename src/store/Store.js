import { configureStore } from "@reduxjs/toolkit";
import ShowNavSlice from "./ShowNavSlice";
import LoadingSlice from "./LoadingSlice";

const store = configureStore({
  reducer: {
    ShowNavSlice: ShowNavSlice,
    LoadingSlice: LoadingSlice,
  },
});

export default store;
