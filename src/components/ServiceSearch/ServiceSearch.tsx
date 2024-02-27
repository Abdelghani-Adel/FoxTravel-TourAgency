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
import DateEndInput from "./DateEndInput";
import DateStartInput from "./DateStartInput";
import HotelReservation from "./HotelReservation/HotelReservation";
import CityInput from "./CityInput/CityInput";
import DateDoublePicker from "./DateDoublePicker/DateDoublePicker";
import FlightSearch from "./FlightSearch/FlightSearch";

const ServiceSearch = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loaderActions.showLoadingOverlay());
    router.push("/search-result", {});
  };

  return (
    <div className="serviceSearch">
      <CategoryList />

      <form className="serviceSearch_form" onSubmit={submitHandler}>
        {searchState.category === "Flights" && <FlightSearch />}

        {searchState.category !== "Flights" && (
          <>
            <CityInput />
            <DateDoublePicker />
            <HotelReservation />

            <button className="serviceSearch_submitBtn">
              <FaSearch /> Search
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ServiceSearch;
