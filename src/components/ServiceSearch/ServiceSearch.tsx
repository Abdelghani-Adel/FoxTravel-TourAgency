"use client";

import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { useRouter } from "next/navigation";
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
import HotelReservation from "./HotelReservation/HotelReservation";

const ServiceSearch = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loaderActions.showLoadingOverlay());

    // make the api call

    // navigate
    router.push("/search-result", {});
  };

  return (
    <div className="serviceSearch">
      <CategoryList />

      <form className="serviceSearch_form" onSubmit={submitHandler}>
        <CityInput />

        <HotelReservation />

        <DateStartInput />

        <DateEndInput />

        {searchState.category === "Car Rental" && <CarModelInput />}

        {searchState.category === "Car Hire" && <CarRidersInput />}

        {searchState.category === "Hotel" && <HotelGuestsInput />}

        {searchState.category === "Activity" && <ActivityInput />}

        <button className="serviceSearch_submitBtn">
          <FaSearch /> Search
        </button>
      </form>
    </div>
  );
};

export default ServiceSearch;
