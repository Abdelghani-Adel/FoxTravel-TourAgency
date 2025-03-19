import React from "react";

const NumberInput = (props: IProps) => {
  const { value, min, max, onIncrement, onDecrement } = props;
  const plusIsDisabled = value >= max;
  const minusIsDisabled = value <= min;

  return (
    <div className="ss_numberInput">
      <button
        type="button"
        className="ss_numberInputBtn"
        onClick={onDecrement}
        disabled={minusIsDisabled}
      >
        <span>ـــ</span>
      </button>

      <span className="ss_numberInput-value">{value}</span>

      <button
        type="button"
        className="ss_numberInputBtn"
        onClick={onIncrement}
        disabled={plusIsDisabled}
      >
        <span>+</span>
      </button>
    </div>
  );
};

export default NumberInput;

type IProps = {
  value: number;
  min: number;
  max: number;
  onIncrement: () => void;
  onDecrement: () => void;
};
