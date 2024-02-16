import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import React from "react";

const Page = () => {
  useHideLoadingLayer();

  return <div>Tour Details</div>;
};

export default Page;
