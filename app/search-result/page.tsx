"use client";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import React from "react";

const Page = () => {
  useHideLoadingLayer();

  return <div>Search Result</div>;
};

export default Page;
