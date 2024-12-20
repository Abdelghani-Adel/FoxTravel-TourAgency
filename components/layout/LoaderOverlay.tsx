"use client";

import { useAppSelector } from "@/redux/store";
import React from "react";
import LoadingScreen1 from "@/components/loadingScreens/LoadingScreen1";

const LoaderOverlay = () => {
  const loader = useAppSelector((state) => state.loader);

  if (!loader.isShown) return null;

  return (
    <div className="loadingScreen" data-aos="fade" data-aos-duaraion="300">
      <LoadingScreen1 />
    </div>
  );
};

export default LoaderOverlay;
