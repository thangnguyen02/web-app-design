import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const LoadingSlice = createSlice({
  name: "LoadingSlice",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
