"use client";
import RtsRating from "@/app/_components/ui/RtsRating";
import { formatNumber } from "@/app/_utils/Formatters";
import React from "react";

type props = {
  rating: number;
  reviews: number;
};

const FoxCardRating = (props: props) => {
  return (
    <div className="foxCard_rating">
      <span className="ratingBox">
        <span>{props.rating}</span>
      </span>
      <RtsRating rating={props.rating} readonly={true} />
      <span className="fw-light">({formatNumber(props.reviews)})</span>
    </div>
  );
};

export default FoxCardRating;
