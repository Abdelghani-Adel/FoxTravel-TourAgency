"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import React from "react";

const Page = () => {
  useHideLoadingLayer();

  return <div className="container mb-5 mt-5">Car Details Page</div>;
};

export default Page;
