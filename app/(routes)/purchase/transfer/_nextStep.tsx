import React from "react";

type Props = {
  onClick: () => void;
};

const NextStep = (props: Props) => {
  return (
    <button className="foxBtn thirdBtn" onClick={props.onClick}>
      Next Step
    </button>
  );
};

export default NextStep;
