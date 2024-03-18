import React, { useState } from "react";
import InputWrapper from "../InputWrapper";
import Image from "next/image";
import Number from "./Number";
import PersonIcon from "../icons/PersonIcon";
import ArrowIcon from "../icons/ArrowIcon";
import DropdownMenuWrapper from "@/app/_components/ui/DropdownMenu/DropdownMenuWrapper";
import DropdownMenuToggler from "@/app/_components/ui/DropdownMenu/DropdownMenuToggler";
import DropdownMenuContent from "@/app/_components/ui/DropdownMenu/DropdownMenuContent";

const FlightPassengers = () => {
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);

  const onAdultsChange = (adults: number) => setAdults(adults);
  const onChildrenChange = (childs: number) => setChilds(childs);
  const onInfantsChange = (infants: number) => setInfants(infants);

  return (
    <InputWrapper title="Passengers">
      <PersonIcon />
      <DropdownMenuWrapper>
        <DropdownMenuToggler className="ss_dropdownToggler">
          {adults} Adults - {childs} Children - {infants} Infants
        </DropdownMenuToggler>

        <DropdownMenuContent className="ss_dropdowncontent">
          <div className="d-flex flex-column gap-2">
            <Number initValue={adults} min={1} max={10} title="Adults" onChange={onAdultsChange} />
            <Number
              initValue={childs}
              min={1}
              max={5}
              title="Children"
              onChange={onChildrenChange}
            />
            <Number
              initValue={infants}
              min={1}
              max={5}
              title="Infants"
              onChange={onInfantsChange}
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenuWrapper>
      <ArrowIcon />
    </InputWrapper>
  );
};

export default FlightPassengers;
