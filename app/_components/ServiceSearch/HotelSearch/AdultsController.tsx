import React from "react";
import NumberInput from "../common/NumberInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { hotelSearchActions } from "@/app/_redux/slices/hotelSearchSlice";

const AdultsController = () => {
  const dispatch = useAppDispatch();
  const hotelSearch = useAppSelector((state) => state.hotelSearch);

  const onAdultsIncrement = () => dispatch(hotelSearchActions.incrementAdults());
  const onAdultsDecrement = () => dispatch(hotelSearchActions.decrementAdults());

  return (
    <div className="d-flex justify-content-between align-items-center gap-5">
      <h6>Adults</h6>
      <NumberInput
        min={hotelSearch.config.minAdults}
        max={hotelSearch.config.maxAdults}
        value={hotelSearch.adults}
        onIncrement={onAdultsIncrement}
        onDecrement={onAdultsDecrement}
      />
    </div>
  );
};

export default AdultsController;
