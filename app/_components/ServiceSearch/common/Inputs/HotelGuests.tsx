"use client";

import DropdownMenuContent from "@/app/_components/ui/DropdownMenu/DropdownMenuContent";
import DropdownMenuToggler from "@/app/_components/ui/DropdownMenu/DropdownMenuToggler";
import DropdownMenuWrapper from "@/app/_components/ui/DropdownMenu/DropdownMenuWrapper";
import { serviceSearchActions } from "@/app/_redux/slices/serviceSearch";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import InputWrapper from "../InputWrapper";
import ArrowIcon from "../icons/ArrowIcon";
import PersonIcon from "../icons/PersonIcon";
import HotelChildren from "./HotelChildren";
import Number from "./Number";

// This is a controlled component, it reads from redux and update in redux.
const HotelGuests = () => {
  const dispatch = useAppDispatch();

  // Get the current value from redux state.
  const reduxState = useAppSelector((state) => state.serviceSearch.hotel);
  const { rooms, adults, childs } = reduxState;

  // Update directely in redux state.
  const onRoomsChange = (newRooms: number) => {
    dispatch(serviceSearchActions.updateHotelForm({ ...reduxState, rooms: newRooms }));
  };

  // Update directely in redux state.
  const onAdultsChange = (newAdults: number) => {
    dispatch(serviceSearchActions.updateHotelForm({ ...reduxState, adults: newAdults }));
  };

  return (
    <InputWrapper title="Hotel Guests">
      <PersonIcon />
      <DropdownMenuWrapper>
        <DropdownMenuToggler className="ss_dropdownToggler">
          {rooms} Room - {adults} Adult - {childs.length} Children
        </DropdownMenuToggler>

        <DropdownMenuContent className="ss_dropdowncontent">
          <div className="d-flex flex-column gap-2">
            <Number initValue={rooms} min={1} max={3} title="Rooms" onChange={onRoomsChange} />
            <Number initValue={adults} min={1} max={5} title="Adults" onChange={onAdultsChange} />
            <HotelChildren />
          </div>
        </DropdownMenuContent>
      </DropdownMenuWrapper>
      <ArrowIcon />
    </InputWrapper>
  );
};

export default HotelGuests;
