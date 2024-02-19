import React, { useEffect, useState } from "react";
import styles from "./HotelReservation.module.css";

type INumberInputProps = {
  initValue: number;
  min: number;
  max: number;
  onChange: (newValue: number) => void;
};

const NumberInput = (props: INumberInputProps) => {
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
    <div className={styles.numberInput}>
      <MinusButton onClick={decrement} disabled={minusIsDisabled} />
      <span className={styles.number}>{number}</span>
      <PlusIcon onClick={increment} disabled={plusIsDisabled} />
    </div>
  );
};

type IPlusProps = {
  onClick: () => void;
  disabled: boolean;
};

const PlusIcon = (props: IPlusProps) => {
  return (
    <button
      type="button"
      className={styles.numberIcons}
      onClick={props.onClick}
      disabled={props.disabled}
    >
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
    <button
      type="button"
      className={styles.numberIcons}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span>ـــ</span>
    </button>
  );
};

export default NumberInput;
