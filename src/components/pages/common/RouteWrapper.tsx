"use client";
import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch } from "@/src/redux/store";
import React, { useEffect } from "react";

const RouteWrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loaderActions.hideLoadingOverlay());
  }, []);

  return <>{children}</>;
};

export default RouteWrapper;
