import { configureStore } from "@reduxjs/toolkit";
import ShowNavSlice from "./ShowNavSlice";

const store = configureStore({
  reducer: {
    ShowNavSlice: ShowNavSlice,
  },
});

export default store;
