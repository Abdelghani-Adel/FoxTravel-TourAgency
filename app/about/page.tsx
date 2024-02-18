"use client";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import React from "react";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div>About Page</div>
      </div>
    </div>
  );
};

export default Page;
