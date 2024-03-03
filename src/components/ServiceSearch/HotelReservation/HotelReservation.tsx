"use client";

import React, { useState } from "react";
import styles from "./HotelReservation.module.css";
import TogglerButton from "./TogglerButton";
import NumberInput from "./NumberInput";
import AdultsInput from "./AdultsInput";
import RoomsInput from "./RoomsInput";
import ChildrenInput from "./ChildrenInput";

const HotelReservation = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState<number[]>([]);
  const [rooms, setRooms] = useState(1);

  const onRoomsChange = (newRooms: number) => setRooms(newRooms);
  const onAdultsChange = (newAdults: number) => setAdults(newAdults);
  const onChildrenChange = (newChildren: number[]) => setChildren(newChildren);

  return (
    <div className={`dropdown flex-grow-1 ${styles.wrapper}`}>
      <TogglerButton adults={adults} childs={children.length} rooms={rooms} />

      <div className={`dropdown-menu ${styles.dropdownWrapper}`}>
        <div className={styles.dropdownWrapper_inner}>
          <RoomsInput onRoomsChange={onRoomsChange} />
          <AdultsInput onAdultsChange={onAdultsChange} />
          <ChildrenInput onChildrenChange={onChildrenChange} />

          {/* <button type="button" className={styles.doneBtn}>
            Done
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HotelReservation;
