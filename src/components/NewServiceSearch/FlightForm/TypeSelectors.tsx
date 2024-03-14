"use client";
import { ChangeEvent, useState } from "react";
import Modal from "../../ui/Modal";
import ModalTrigger from "../../ui/ModalTrigger";
import Multiple from "./Multiple";
import MyModal from "../../ui/MyModal";

type props = {
  onChange: (tripType: string) => void;
};

const TypeSelectors = (props: props) => {
  const [isShown, setIsShown] = useState(false);

  const onSearchTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="d-flex gap-4 mb-2 justify-content-center align-items-center fw-normal">
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          value="oneway"
          name="searchType"
          id="flight_oneway"
          defaultChecked
          onChange={onSearchTypeChange}
        />
        <label htmlFor="flight_oneway" className="form-check-label text-white">
          One Way
        </label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          value="round"
          name="searchType"
          id="flight_round"
          onChange={onSearchTypeChange}
        />
        <label htmlFor="flight_round" className="form-check-label text-white">
          Round Trip
        </label>
      </div>

      <button className="foxBtn thirdBtn smBtn" onClick={() => setIsShown(true)}>
        Multiple Destinations
      </button>

      <MyModal show={isShown} onClose={() => setIsShown(false)}>
        <Multiple />
      </MyModal>
    </div>
  );
};

export default TypeSelectors;
