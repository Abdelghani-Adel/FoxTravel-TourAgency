import React from "react";

const FoxCardPrice = ({ price, curr }: { price: number; curr: string }) => {
  return (
    <p className="foxCard_price mb-0">
      <span className="fw-normal txtGray">From</span>{" "}
      <strong className="price">
        {price}
        {curr}
      </strong>
    </p>
  );
};

export default FoxCardPrice;
