import React from "react";

type Props = {
  onClick: () => void;
};

const PrevStep = (props: Props) => {
  return (
    <button className="foxBtn thirdBtn" onClick={props.onClick}>
      Prev Step
    </button>
  );
};

export default PrevStep;
