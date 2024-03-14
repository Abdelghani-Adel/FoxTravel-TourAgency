import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import loaderSlice from "./slices/loaderSlice";
import hotelDetailsSlice from "./slices/hotelDetails";
import destinationDetailsSlice from "./slices/destnationDetailsSlice";
import searchSlice from "./slices/searchSlice";
import serviceSearch from "./slices/serviceSearch";

const store = configureStore({
  reducer: {
    loader: loaderSlice.reducer,
    hotelDetails: hotelDetailsSlice.reducer,
    destinationDetails: destinationDetailsSlice.reducer,
    search: searchSlice.reducer,
    serviceSearch: serviceSearch.reducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
