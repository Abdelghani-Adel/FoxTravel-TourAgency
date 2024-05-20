import React from "react";
import NumberInput from "../common/NumberInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { hotelSearchActions } from "@/app/_redux/slices/hotelSearchSlice";

const RoomsController = () => {
  const dispatch = useAppDispatch();
  const hotelSearch = useAppSelector((state) => state.hotelSearch);

  const onRoomsIncrement = () => dispatch(hotelSearchActions.incrementRooms());
  const onRoomsDecrement = () => dispatch(hotelSearchActions.decrementRooms());

  return (
    <div className="d-flex justify-content-between align-items-center gap-5">
      <h6>Rooms</h6>
      <NumberInput
        min={hotelSearch.config.minRooms}
        max={hotelSearch.config.maxRooms}
        value={hotelSearch.rooms}
        onIncrement={onRoomsIncrement}
        onDecrement={onRoomsDecrement}
      />
    </div>
  );
};

export default RoomsController;
