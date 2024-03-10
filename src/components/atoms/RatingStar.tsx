import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
//@ts-ignore
import Rating from "react-rating";
const ReactRating = Rating as React.ElementType;

const RatingStar = (props: IProps) => {
  const { rating, readonly, color, onChange } = props;

  return (
    <IconContext.Provider value={{ color: color || "#fed900" }}>
      <ReactRating
        start={0}
        stop={5}
        step={1}
        fractions={10}
        readonly={readonly}
        initialRating={rating}
        onClick={onChange}
        emptySymbol={<BsStar />}
        fullSymbol={[<BsStarFill />]}
      />
    </IconContext.Provider>
  );
};

export default RatingStar;

type IProps = {
  rating: number;
  readonly: boolean;
  color: string;
  onChange?: (rating: number) => {};
};
