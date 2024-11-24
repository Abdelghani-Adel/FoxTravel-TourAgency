import React from "react";
import styles from "./btnMenues.module.css";

type props = {
  onClick: () => void;
};

const BtnTogglerArrowRight = (props: props) => {
  const { onClick } = props;

  return (
    <button className={styles.btnTogglerArrowRight} onClick={onClick}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default BtnTogglerArrowRight;
