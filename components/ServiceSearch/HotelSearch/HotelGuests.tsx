import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import NumberInput from "../common/NumberInput";
import { hotelSearchActions } from "@/redux/slices/hotelSearchSlice";
import GuestsFormToggler from "./GuestsFormToggler";
import ChildAgeInput from "./ChildAgeInput";
import RoomsController from "./RoomsController";
import AdultsController from "./AdultsController";

const HotelGuests = () => {
  const dispatch = useAppDispatch();
  const hotelSearch = useAppSelector((state) => state.hotelSearch);

  const onChildrenIncrement = () =>
    dispatch(hotelSearchActions.incrementChildren());
  const onChildrensDecrement = () =>
    dispatch(hotelSearchActions.decrementChildren());

  return (
    <div className="dropdown ss_formInput">
      <h6 className="ss_formInputTitle">Guests</h6>
      <GuestsFormToggler />

      <div className="dropdown-menu p-3">
        <div className="d-flex flex-column gap-2">
          <RoomsController />
          <AdultsController />

          <div className="d-flex justify-content-between align-items-center gap-5">
            <h6>Children</h6>
            <NumberInput
              min={hotelSearch.config.minChilds}
              max={hotelSearch.config.maxAdults}
              value={hotelSearch.childs.length}
              onIncrement={onChildrenIncrement}
              onDecrement={onChildrensDecrement}
            />
          </div>

          {hotelSearch.childs.length > 0 && (
            <div>
              <div className="row row-cols-2 g-2 mb-2">
                {hotelSearch.childs.map((age, i) => (
                  <ChildAgeInput value={age} id={i} />
                ))}
              </div>

              <p className="text-muted fw-light">
                To find a place to stay that fits your entire group along with
                correct prices, we need to know how old your children will be at
                check-out.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelGuests;
