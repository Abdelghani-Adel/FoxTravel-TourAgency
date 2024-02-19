import React from "react";
import styles from "./HotelReservation.module.css";
import Image from "next/image";
import personIcon from "./icons/person.webp";
import arrowDown from "./icons/down.png";

type props = {
  adults: number;
  rooms: number;
  childs: number;
};

const TogglerButton = (props: props) => {
  const { adults, rooms, childs } = props;
  return (
    <button
      type="button"
      className={styles.togglerButton}
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <PersonIcon /> {adults} adults - {childs} children - {rooms} room <ArrowIcon />
    </button>
  );
};

const PersonIcon = () => {
  return <Image src={personIcon} width={20} height={20} alt="" />;
};

export const ArrowIcon = () => {
  return <Image src={arrowDown} width={18} height={18} alt="" />;
};

export default TogglerButton;
