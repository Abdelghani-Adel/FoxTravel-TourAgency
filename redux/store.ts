import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import loaderSlice from "./slices/loaderSlice";
import hotelSearchSlice from "./slices/hotelSearchSlice";
import flightSearchSlice from "./slices/flightSearchSlice";
import transportSearchSlice from "./slices/transportSearchSlice";
import searchConfigSlice from "./slices/searchConfig";

const store = configureStore({
  reducer: {
    loader: loaderSlice,
    hotelSearch: hotelSearchSlice,
    flightSearch: flightSearchSlice,
    transportSearch: transportSearchSlice,
    searchConfig: searchConfigSlice,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
