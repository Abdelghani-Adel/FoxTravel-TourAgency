"use client";
import { ChangeEvent, useState } from "react";
import MyModal from "../../ui/MyModal";
import Multiple from "./Multiple";

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
          id="transport_oneway"
          defaultChecked
          onChange={onSearchTypeChange}
        />
        <label htmlFor="transport_oneway" className="form-check-label text-white">
          One Way
        </label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          value="return"
          name="searchType"
          id="transport_return"
          onChange={onSearchTypeChange}
        />
        <label htmlFor="transport_return" className="form-check-label text-white">
          Return
        </label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          value="excursion"
          name="searchType"
          id="excursion"
          onChange={onSearchTypeChange}
        />
        <label htmlFor="excursion" className="form-check-label text-white">
          Excursion
        </label>
      </div>

      <button className="foxBtn thirdBtn smBtn" onClick={() => setIsShown(true)}>
        Multiple
      </button>

      <MyModal show={isShown} onClose={() => setIsShown(false)}>
        <Multiple />
      </MyModal>
    </div>
  );
};

export default TypeSelectors;
