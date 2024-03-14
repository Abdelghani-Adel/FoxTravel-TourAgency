import React, { useState } from "react";
import ServiceSearchController from "../common/ServiceSearchController";
import Image from "next/image";
import NumberInput from "../common/NumberInput";
import DropdownWrapper from "../common/Dropdown/DropdownWrapper";
import DropdownToggler from "../common/Dropdown/DropdownToggler";
import DropdownData from "../common/Dropdown/DropdownData";
import PersonIcon from "../common/PersonIcon";
import ArrowIcon from "../common/ArrowIcon";

const FlightPassengersInput = () => {
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);

  const onAdultsChange = (adults: number) => setAdults(adults);
  const onChildrenChange = (childs: number) => setChilds(childs);
  const onInfantsChange = (infants: number) => setInfants(infants);

  return (
    <ServiceSearchController title="Passengers">
      <PersonIcon />
      <DropdownWrapper>
        <DropdownToggler>
          {adults} Adults - {childs} Children - {infants} Infants
        </DropdownToggler>

        <DropdownData>
          <div className="d-flex flex-column gap-2">
            <NumberInput
              initValue={adults}
              min={1}
              max={10}
              title="Adults"
              onChange={onAdultsChange}
            />
            <NumberInput
              initValue={childs}
              min={1}
              max={5}
              title="Children"
              onChange={onChildrenChange}
            />
            <NumberInput
              initValue={infants}
              min={1}
              max={5}
              title="Infants"
              onChange={onInfantsChange}
            />
          </div>
        </DropdownData>
      </DropdownWrapper>
      <ArrowIcon />
    </ServiceSearchController>
  );
};

export default FlightPassengersInput;
