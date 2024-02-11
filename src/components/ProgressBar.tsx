import React from "react";

type props = {
  max: number;
  value: number;
};

const ProgressBar = (props: props) => {
  const { max, value } = props;

  const progress = (value * 100) / max;

  return (
    <div className="progress" style={{ height: "4px" }}>
      <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
