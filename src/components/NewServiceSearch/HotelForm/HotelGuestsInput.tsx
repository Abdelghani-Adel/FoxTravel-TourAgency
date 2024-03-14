"use client";

import React, { useState } from "react";
import ChildsWithAgeInput from "../common/ChildsWithAgeInput";
import Image from "next/image";
import personIcon from "../common/icons/person.webp";
import arrowDown from "../common/icons/down.png";
import NumberInput from "../common/NumberInput";
import DropdownWrapper from "../common/Dropdown/DropdownWrapper";
import DropdownToggler from "../common/Dropdown/DropdownToggler";
import DropdownData from "../common/Dropdown/DropdownData";
import ServiceSearchController from "../common/ServiceSearchController";

const HotelGuestsInput = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState<number[]>([]);

  const onRoomsChange = (newRooms: number) => setRooms(newRooms);
  const onAdultsChange = (newAdults: number) => setAdults(newAdults);
  const onChildrenChange = (newChildren: number[]) => setChildren(newChildren);

  return (
    <ServiceSearchController title="Hotel Guests">
      <PersonIcon />
      <DropdownWrapper>
        <DropdownToggler>
          {rooms} Room - {adults} Adult - {children.length} Children
        </DropdownToggler>

        <DropdownData>
          <div className="d-flex flex-column gap-2">
            <NumberInput initValue={1} min={1} max={3} title="Rooms" onChange={onRoomsChange} />
            <NumberInput initValue={1} min={1} max={5} title="Adults" onChange={onAdultsChange} />
            <ChildsWithAgeInput onChildrenChange={onChildrenChange} />
          </div>
        </DropdownData>
      </DropdownWrapper>
      <ArrowIcon />
    </ServiceSearchController>
  );
};

const PersonIcon = () => {
  return <Image src={personIcon} width={20} height={20} alt="" />;
};

const ArrowIcon = () => {
  return <Image src={arrowDown} width={18} height={18} alt="" />;
};

export default HotelGuestsInput;
