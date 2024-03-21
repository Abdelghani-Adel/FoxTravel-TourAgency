import React, { useState } from "react";
import { useAppSelector } from "@/app/_redux/store";
import TransportForm from "./TransportForm";

const TransportFormWrapper = () => {
  const reduxFormState = useAppSelector((state) => state.serviceSearch);
  const activeCategory = reduxFormState.category;

  if (activeCategory !== "Transport") return null;

  return <TransportForm />;
};

export default TransportFormWrapper;
