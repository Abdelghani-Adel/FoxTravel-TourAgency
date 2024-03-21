import React from "react";
import { useAppSelector } from "@/app/_redux/store";
import HotelForm from "./HotelForm";

const HotelFormWrapper = () => {
  const reduxFormState = useAppSelector((state) => state.serviceSearch);
  const activeCategory = reduxFormState.category;

  if (activeCategory !== "Hotel") return null;

  return <HotelForm />;
};

export default HotelFormWrapper;
