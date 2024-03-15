import React, { useEffect, useState } from "react";

type INumberInputProps = {
  initValue: number;
  min: number;
  max: number;
  title: string;
  onChange: (newValue: number) => void;
};

const Number = (props: INumberInputProps) => {
  const [number, setNumber] = useState(props.initValue);
  const [plusIsDisabled, setPlusIsDisabled] = useState(false);
  const [minusIsDisabled, setMinusIsDisabled] = useState(false);

  const increment = () => {
    setNumber((prev) => {
      updateBtnsAvailability(prev + 1);
      return prev + 1;
    });
  };

  const decrement = () => {
    setNumber((prev) => {
      updateBtnsAvailability(prev - 1);
      return prev - 1;
    });
  };

  const updateBtnsAvailability = (newValue: number) => {
    if (newValue == props.max) {
      setPlusIsDisabled(true);
    } else {
      setPlusIsDisabled(false);
    }

    if (newValue == props.min) {
      setMinusIsDisabled(true);
    } else {
      setMinusIsDisabled(false);
    }
  };

  useEffect(() => {
    updateBtnsAvailability(props.initValue);
  }, []);

  useEffect(() => {
    props.onChange(number);
  }, [number]);

  return (
    <div className="d-flex gap-5 justify-content-between align-items-center">
      <p>{props.title}</p>
      <div className="numberInput">
        <MinusButton onClick={decrement} disabled={minusIsDisabled} />
        <span className="number">{number}</span>
        <PlusIcon onClick={increment} disabled={plusIsDisabled} />
      </div>
    </div>
  );
};

type IPlusProps = {
  onClick: () => void;
  disabled: boolean;
};

const PlusIcon = (props: IPlusProps) => {
  return (
    <button type="button" className="numberIcons" onClick={props.onClick} disabled={props.disabled}>
      <span>+</span>
    </button>
  );
};

type IMinusProps = {
  onClick: () => void;
  disabled: boolean;
};

const MinusButton = (props: IMinusProps) => {
  return (
    <button type="button" className="numberIcons" onClick={props.onClick} disabled={props.disabled}>
      <span>ـــ</span>
    </button>
  );
};

export default Number;
