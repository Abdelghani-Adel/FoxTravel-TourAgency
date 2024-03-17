import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { useEffect, useState } from "react";

const useSearchData = () => {
  const serviceSearch = useAppSelector((state) => state.serviceSearch);
  const [rquestBody, setRequestBody] = useState<any>();

  // Select the needed form;
  useEffect(() => {
    const selectedCategory = serviceSearch.category;
    if (selectedCategory === "Hotel") {
      setRequestBody(serviceSearch.hotel);
    } else if (selectedCategory === "Flight" && serviceSearch.flight.flightType === "oneway") {
      setRequestBody({
        ...serviceSearch.flight.oneway,
        passengers: serviceSearch.flight.passengers,
      });
    } else if (selectedCategory === "Flight" && serviceSearch.flight.flightType === "round") {
      setRequestBody({
        ...serviceSearch.flight.round,
        passengers: serviceSearch.flight.passengers,
      });
    } else if (selectedCategory === "Flight" && serviceSearch.flight.flightType === "multiple") {
      setRequestBody({
        ...serviceSearch.flight.multiple,
      });
    } else if (
      selectedCategory === "Transport" &&
      serviceSearch.transport.transferType === "oneway"
    ) {
      setRequestBody({
        ...serviceSearch.transport.oneway,
        passengers: serviceSearch.transport.passengers,
      });
    } else if (
      selectedCategory === "Transport" &&
      serviceSearch.transport.transferType === "round"
    ) {
      setRequestBody({
        ...serviceSearch.transport.round,
        passengers: serviceSearch.transport.passengers,
      });
    } else if (
      selectedCategory === "Transport" &&
      serviceSearch.transport.transferType === "multiple"
    ) {
      setRequestBody({
        ...serviceSearch.transport.multiple,
      });
    }
  }, [serviceSearch.category]);

  return rquestBody;
};

export default useSearchData;
