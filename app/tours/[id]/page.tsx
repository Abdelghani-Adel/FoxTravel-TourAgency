"use client";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import { useAppDispatch } from "@/src/redux/store";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const tourId = params.id;
  const [tourDetails, setTourDetails] = useState<any>();

  useEffect(() => {}, []);

  return (
    <div className="container mt-4 mb-4">
      <div className="row"></div>
    </div>
  );
};

export default Page;
