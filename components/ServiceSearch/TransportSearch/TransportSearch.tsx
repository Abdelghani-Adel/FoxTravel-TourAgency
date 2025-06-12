import React, { useEffect, useState } from "react";
import TransportTypeSelector from "./TransportTypeSelector";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import OneWayTransfer from "./OneWayTransfer";
import RoundTransfer from "./RoundTransfer";
import ExcursionTransfer from "./ExcursionTransfer";
import MultipleTransfer from "./MultipleTransfer";
import MyModal from "../../ui/MyModal";
import { transportSearchActions } from "@/redux/slices/transportSearchSlice";
import { getStartDate } from "@/services/transportServices";

const TransportSearch = async () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const dispatch = useAppDispatch();
  const transportType = useAppSelector((state) => state.transportSearch.type);

  const onCloseModal = () => {
    dispatch(transportSearchActions.setTransportType("oneway"));
  };

  useEffect(() => {
    const fetchStartDate = async () => {
      const response = await getStartDate();
      setStartDate(response.data);
    };

    fetchStartDate();
  }, []);

  return (
    <>
      <TransportTypeSelector />

      {transportType === "oneway" && <OneWayTransfer startDate={startDate} />}
      {transportType === "round" && <RoundTransfer startDate={startDate} />}
      {transportType === "excursion" && <ExcursionTransfer startDate={startDate} />}

      <MyModal show={transportType === "multiple"} onClose={onCloseModal}>
        <MultipleTransfer startDate={startDate} />
      </MyModal>
    </>
  );
};

export default TransportSearch;
