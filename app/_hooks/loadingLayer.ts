"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/_redux/store";
import { loaderActions } from "@/app/_redux/slices/loaderSlice";

const useHideLoadingLayer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loaderActions.hideLoadingOverlay());
    }, 1000);
  }, []);
};

export default useHideLoadingLayer;
