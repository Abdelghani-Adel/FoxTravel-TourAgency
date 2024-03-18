import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoadingOverlay: () => {
      return { isShown: true };
    },
    hideLoadingOverlay: () => {
      return { isShown: false };
    },
  },
});

export const loaderActions = loaderSlice.actions;

export default loaderSlice;
