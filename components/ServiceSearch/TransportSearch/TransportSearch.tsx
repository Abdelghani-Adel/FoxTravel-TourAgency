import React from "react";
import TransportTypeSelector from "./TransportTypeSelector";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import OneWayTransfer from "./OneWayTransfer";
import RoundTransfer from "./RoundTransfer";
import ExcursionTransfer from "./ExcursionTransfer";
import MultipleTransfer from "./MultipleTransfer";
import MyModal from "../../ui/MyModal";
import { transportSearchActions } from "@/redux/slices/transportSearchSlice";

const TransportSearch = () => {
  const dispatch = useAppDispatch();
  const transportType = useAppSelector((state) => state.transportSearch.type);

  const onCloseModal = () => {
    dispatch(transportSearchActions.setTransportType("oneway"));
  };

  return (
    <>
      <TransportTypeSelector />

      {transportType === "oneway" && <OneWayTransfer />}
      {transportType === "round" && <RoundTransfer />}
      {transportType === "excursion" && <ExcursionTransfer />}

      <MyModal show={transportType === "multiple"} onClose={onCloseModal}>
        <MultipleTransfer />
      </MyModal>
    </>
  );
};

export default TransportSearch;
