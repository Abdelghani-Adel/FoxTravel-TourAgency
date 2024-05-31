"use client";
import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
//@ts-ignore
import Rating from "react-rating";
const ReactRating = Rating as React.ElementType;

type props = {
  rating: number;
  readonly: boolean;
  onChange?: () => {};
};

const RtsRating = (props: props) => {
  const { readonly, rating } = props;
  return (
    <IconContext.Provider value={{ color: "#fed900" }}>
      <ReactRating
        start={0}
        stop={5}
        step={1}
        fractions={10}
        readonly={readonly}
        initialRating={rating}
        onClick={() => {}}
        emptySymbol={<BsStar />}
        fullSymbol={[<BsStarFill />]}
      />
    </IconContext.Provider>
  );
};

export default RtsRating;
