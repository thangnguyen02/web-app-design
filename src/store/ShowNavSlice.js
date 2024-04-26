import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: true,
};

export const ShowNavSlice = createSlice({
  name: "ShowNavSlice",
  initialState,
  reducers: {
    setShowNav(state, action) {
      state.isShow = action.payload;
    },
  },
});

export const { setShowNav } = ShowNavSlice.actions;

export default ShowNavSlice.reducer;
