import React, { useState } from "react";
import styles from "./CityInput.module.css";
import Image from "next/image";
import cityIcon from "./city.png";
import CityOption from "./CityOption";
import { v4 } from "uuid";

const cities = [
  {
    id: 1,
    name: "Hurghada",
    address: "Red Sea, Egypt",
  },
  {
    id: 2,
    name: "Marsa Alam",
    address: "Red Sea, Egypt",
  },
  {
    id: 3,
    name: "Cairo",
    address: "Cairo, Egypt",
  },
  {
    id: 4,
    name: "Dahab",
    address: "Sharm, Egypt",
  },
  {
    id: 5,
    name: "Elsokhna",
    address: "Red Sea, Egypt",
  },
];

const CityInput = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const onCityClick = (newCity: string) => setSelectedCity(newCity);

  return (
    <div className={`dropdown ${styles.wrapper}`}>
      <button
        className={styles.toggler}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image src={cityIcon} width={20} height={20} alt="city icon" />
        {selectedCity.length > 0 ? (
          <span>{selectedCity}</span>
        ) : (
          <span className="text-muted">Where are you going?</span>
        )}
      </button>

      <ul className="dropdown-menu">
        {cities.map((city) => (
          <CityOption key={v4()} city={city.name} address={city.address} onClick={onCityClick} />
        ))}
      </ul>
    </div>
  );
};

export default CityInput;
