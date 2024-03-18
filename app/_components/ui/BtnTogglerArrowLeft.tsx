import React from "react";
import styles from "./btnMenues.module.css";

type props = {
  onClick: () => void;
};

const BtnTogglerArrowLeft = (props: props) => {
  const { onClick } = props;

  return (
    <button className={styles.btnTogglerArrowLeft} onClick={onClick}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default BtnTogglerArrowLeft;
