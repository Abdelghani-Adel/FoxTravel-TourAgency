import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import loaderSlice from "./slices/loaderSlice";
import hotelDetailsSlice from "./slices/hotelDetails";
import destinationDetailsSlice from "./slices/destnationDetailsSlice";

const store = configureStore({
  reducer: {
    loader: loaderSlice.reducer,
    hotelDetails: hotelDetailsSlice.reducer,
    destinationDetails: destinationDetailsSlice.reducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
