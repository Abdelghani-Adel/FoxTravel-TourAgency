import { searchActions } from "@/src/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React from "react";

const carModels = [
  {
    id: 1,
    name: "Cherry Arizo",
  },
  {
    id: 2,
    name: "Kia cerato",
  },
  {
    id: 3,
    name: "MG5",
  },
  {
    id: 4,
    name: "Cetroen C5",
  },
];

const CarModelInput = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);

  const updateCar = (newCar: string) => {
    dispatch(searchActions.updateCarModel(newCar));
  };

  return (
    <div className="serviceSearch_inputController">
      <h5 className="searchService_inputTitle">Car Model</h5>
      <div className="dropdown">
        <button
          type="button"
          className="dropdownToggler"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {searchState.carModel}
        </button>
        <div className="dropdown-menu serviceSearch_inputDropdown">
          <ul className="serviceSearch_optionsList">
            {carModels.map((car) => (
              <li
                key={car.id}
                className={`serviceSearch_option ${
                  searchState.carModel === car.name ? "active" : ""
                }`}
                onClick={() => updateCar(car.name)}
              >
                <div className="d-flex flex-column">
                  <span>{car.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarModelInput;
