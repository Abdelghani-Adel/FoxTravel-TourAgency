import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { v4 } from "uuid";

const TourInfo = (props: any) => {
  return (
    <>
      <h4 className="mb-3 textSecondary">{props.info.title}</h4>
      {props.info.details.map((detail: any) => (
        <p key={v4()} className="fw-light">
          <RxDotFilled className="textSecondary" /> {detail}
        </p>
      ))}
    </>
  );
};

export default TourInfo;
