import Image from "next/image";
import React from "react";
import locationIcon from "./location.png";

type props = {
  city: string;
  address: string;
  onClick: (newCity: string) => void;
};

const CityOption = (props: props) => {
  const onClickHandler = () => {
    props.onClick(props.city);
  };

  return (
    <li className="mt-1">
      <button
        className="dropdown-item d-flex gap-3 align-items-center"
        type="button"
        onClick={onClickHandler}
      >
        <Image src={locationIcon} height={30} width={30} alt="location icon" />

        <div>
          <p className="mb-0">{props.city}</p>
          <p className="mb-0 text-muted">{props.address}</p>
        </div>
      </button>
    </li>
  );
};

export default CityOption;
