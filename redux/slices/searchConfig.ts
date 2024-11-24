import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  searchType: "Hotel",
};

const searchConfigSlice = createSlice({
  name: "searchConfig",
  initialState,
  reducers: {
    changeType: (state, action: PayloadAction<ISearchType>) => {
      state.searchType = action.payload;
    },
  },
});

export const searchConfigActions = searchConfigSlice.actions;

export default searchConfigSlice.reducer;
