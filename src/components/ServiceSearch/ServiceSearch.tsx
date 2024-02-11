"use client";

import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import ActivityInput from "./ActivityInput";
import CarModelInput from "./CarModelInput";
import CarRidersInput from "./CarRidersInput";
import CategoryList from "./CategoryList";
import CityInput from "./CityInput";
import DateEndInput from "./DateEndInput";
import DateStartInput from "./DateStartInput";
import HotelGuestsInput from "./HotelGuestsInput";
import useRequestBody from "./hooks/useRequestBody";

const ServiceSearch = () => {
  const { requestBody, updateRequestBody } = useRequestBody();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(requestBody);
  };

  return (
    <div className="serviceSearch">
      <CategoryList requestBody={requestBody} updateRequestBody={updateRequestBody} />

      <form className="serviceSearch_form" onSubmit={submitHandler}>
        <CityInput requestBody={requestBody} updateRequestBody={updateRequestBody} />
        <DateStartInput requestBody={requestBody} updateRequestBody={updateRequestBody} />
        <DateEndInput requestBody={requestBody} updateRequestBody={updateRequestBody} />

        {requestBody.category === "Car Rental" && (
          <>
            <CarModelInput requestBody={requestBody} updateRequestBody={updateRequestBody} />
          </>
        )}

        {requestBody.category === "Car Hire" && (
          <>
            <CarRidersInput requestBody={requestBody} updateRequestBody={updateRequestBody} />
          </>
        )}

        {requestBody.category === "Hotel" && (
          <>
            <HotelGuestsInput requestBody={requestBody} updateRequestBody={updateRequestBody} />
          </>
        )}

        {requestBody.category === "Activity" && (
          <>
            <ActivityInput requestBody={requestBody} updateRequestBody={updateRequestBody} />
          </>
        )}

        <button className="serviceSearch_submitBtn">
          <FaSearch /> Search
        </button>
      </form>
    </div>
  );
};

export default ServiceSearch;
