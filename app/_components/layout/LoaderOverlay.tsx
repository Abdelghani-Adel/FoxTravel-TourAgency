"use client";

import { useAppSelector } from "@/app/_redux/store";
import React from "react";
import LoadingScreen1 from "@/app/_components/loadingScreens/LoadingScreen1";

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
