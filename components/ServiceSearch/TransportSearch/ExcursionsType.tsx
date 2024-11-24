import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { v4 } from "uuid";
import { GiCheckeredFlag } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { transportSearchActions } from "@/redux/slices/transportSearchSlice";

const options = [
  {
    value: "12 Hours",
    label: "12 Hours",
  },
  {
    value: "6 Hours",
    label: "6 Hours",
  },
  {
    value: "4 Hours",
    label: "4 Hours",
  },
];

const ExcursionType = () => {
  const dispatch = useAppDispatch();
  const excursionType = useAppSelector(
    (state) => state.transportSearch.excursions.excursionType
  );

  const onExcursionChange = (excursion: string) => {
    dispatch(transportSearchActions.setExcursionsType(excursion));
  };

  return (
    <div className="dropdown ss_formInput">
      <h6 className="ss_formInputTitle">Excursion Type</h6>
      <button
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
        className="ss_dropdownToggler"
      >
        <GiCheckeredFlag />

        <div>{excursionType}</div>

        <IoIosArrowDown />
      </button>

      <ul className={`dropdown-menu`}>
        {options.map((option, i) => (
          <li key={v4()}>
            <button
              className="dropdown-item fw-light"
              value={option.value}
              type="button"
              onClick={() => onExcursionChange(option.value)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExcursionType;
