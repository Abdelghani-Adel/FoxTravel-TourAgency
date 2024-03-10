"use client";

import React, { useState } from "react";
import styles from "./HotelReservation.module.css";
import TogglerButton from "./TogglerButton";
import NumberInput from "./NumberInput";
import AdultsInput from "./AdultsInput";
import ChildsInput from "./ChildsInput";
import InfantsInput from "./InfantsInput";

const PassengerInput = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(1);

  const onAdultsChange = (newAdults: number) => setAdults(newAdults);
  const onChildsChange = (newRooms: number) => setChildren(newRooms);
  const onInfantChange = (newChildren: number) => setInfants(newChildren);

  return (
    <div className={`dropdown flex-grow-1 ${styles.wrapper}`}>
      <TogglerButton adults={adults} childs={children} infants={infants} />

      <div className={`dropdown-menu ${styles.dropdownWrapper}`}>
        <div className={styles.dropdownWrapper_inner}>
          <AdultsInput onAdultsChange={onAdultsChange} />
          <ChildsInput onChildsChange={onChildsChange} />
          <InfantsInput onInfantChange={onInfantChange} />
        </div>
      </div>
    </div>
  );
};

export default PassengerInput;
