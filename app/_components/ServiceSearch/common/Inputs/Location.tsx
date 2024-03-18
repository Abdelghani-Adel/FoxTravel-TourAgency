import Image from "next/image";
import React from "react";
import cityIcon from "../icons/city.png";
import InputWrapper from "../InputWrapper";
import CityIcon from "../icons/CityIcon";

const Location = (props: Props) => {
  const { placeholder, title, onChange } = props;

  return (
    <InputWrapper title={title}>
      <CityIcon />
      <input className="ss_inputField" placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Location;

type Props = {
  title: string;
  placeholder: string;
  onChange: (value: any) => void;
};
