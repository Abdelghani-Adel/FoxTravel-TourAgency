import React from "react";
import styles from "./btnMenues.module.css";

type props = {
  onClick: () => void;
};

const BtnMenuCloseX = (props: props) => {
  const { onClick } = props;

  return (
    <button className={styles.btnMenuCloseX} onClick={onClick}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default BtnMenuCloseX;
