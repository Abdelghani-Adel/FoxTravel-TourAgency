import React from "react";

type props = {
  requestBody: IServiceSearchReqBody;
  updateRequestBody: IServiceSearchUpdateReqBody;
};

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

const CarModelInput = (props: props) => {
  const { requestBody, updateRequestBody } = props;

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
          {requestBody.carModel}
        </button>
        <div className="dropdown-menu serviceSearch_inputDropdown">
          <ul className="serviceSearch_optionsList">
            {carModels.map((car) => (
              <li
                key={car.id}
                className={`serviceSearch_option ${
                  requestBody.carModel === car.name ? "active" : ""
                }`}
                onClick={() => updateRequestBody("carModel", car.name)}
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
