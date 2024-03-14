import Image from "next/image";
import React from "react";
import cityIcon from "./icons/city.png";
import ServiceSearchController from "./ServiceSearchController";

const LocationInput = (props: Props) => {
  const { placeholder, title, onChange } = props;

  return (
    <ServiceSearchController title={title}>
      <Image src={cityIcon} width={20} height={20} alt="city icon" />
      <input className="serviceSearch_textInput" placeholder={placeholder} />
    </ServiceSearchController>
  );
};

export default LocationInput;

type Props = {
  title: string;
  placeholder: string;
  onChange: (value: any) => void;
};
