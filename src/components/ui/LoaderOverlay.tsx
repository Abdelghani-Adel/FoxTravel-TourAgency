"use client";

import { useAppSelector } from "@/src/redux/store";
import React from "react";
import LoadingScreen1 from "../loadingScreens/LoadingScreen1";

const LoaderOverlay = () => {
  const loader = useAppSelector((state) => state.loader);

  if (!loader.isShown) return null;

  return (
    <div className="loadingScreen">
      <LoadingScreen1 />
    </div>
  );
};

export default LoaderOverlay;
