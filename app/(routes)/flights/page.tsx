"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import React from "react";

const Page = () => {
  useHideLoadingLayer();

  return <div>Flights Page</div>;
};

export default Page;
