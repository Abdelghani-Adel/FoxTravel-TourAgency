"use client";

import DropdownMenuContent from "@/src/components/ui/DropdownMenu/DropdownMenuContent";
import DropdownMenuToggler from "@/src/components/ui/DropdownMenu/DropdownMenuToggler";
import DropdownMenuWrapper from "@/src/components/ui/DropdownMenu/DropdownMenuWrapper";
import { useState } from "react";
import InputWrapper from "../InputWrapper";
import ArrowIcon from "../icons/ArrowIcon";
import PersonIcon from "../icons/PersonIcon";
import Children from "./Children";
import Number from "./Number";

const HotelGuests = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState<number[]>([]);

  const onRoomsChange = (newRooms: number) => setRooms(newRooms);
  const onAdultsChange = (newAdults: number) => setAdults(newAdults);
  const onChildrenChange = (newChildren: number[]) => setChildren(newChildren);

  return (
    <InputWrapper title="Hotel Guests">
      <PersonIcon />
      <DropdownMenuWrapper>
        <DropdownMenuToggler className="ss_dropdownToggler">
          {rooms} Room - {adults} Adult - {children.length} Children
        </DropdownMenuToggler>

        <DropdownMenuContent className="ss_dropdowncontent">
          <div className="d-flex flex-column gap-2">
            <Number initValue={1} min={1} max={3} title="Rooms" onChange={onRoomsChange} />
            <Number initValue={1} min={1} max={5} title="Adults" onChange={onAdultsChange} />
            <Children onChildrenChange={onChildrenChange} />
          </div>
        </DropdownMenuContent>
      </DropdownMenuWrapper>
      <ArrowIcon />
    </InputWrapper>
  );
};

export default HotelGuests;
