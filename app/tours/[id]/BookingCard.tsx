"use client";
import React, { useState, useRef, useEffect } from "react";
import { TravelerSelector } from "./TravelerSelector";
import BookingCardDate from "./BookingCardDate";
import DatePicker from "react-datepicker";
import CustomeDatePicker from "@/components/CustomeDatePicker";
import HotelGuests from "@/components/ServiceSearch/HotelSearch/HotelGuests";
import GuestsSelector from "@/components/GuestsSelector";
import { getTourPrice } from "@/services/tourServices";

const BookingCard = ({ tourDetails }: { tourDetails: ITourDetails }) => {
  const [priceRequest, setPriceRequest] = useState<IPriceRequest>({
    languageCode: "en",
    currCode: tourDetails.currency,
    ServiceTypeId: 1,
    ServiceMainId: tourDetails.serviceId,
    BookDateFrom: "",
    BookDateTo: "",
    AdultPax: 1,
    ChdPax: 0,
    ChdAges: [],
  });

  const [price, setPrice] = useState(tourDetails.price);

  useEffect(() => {
    const getPrice = async () => {
      const response = await getTourPrice(priceRequest);

      setPrice(response.data.price);
    };

    getPrice();
  }, [priceRequest]);

  return (
    <div className="border p-4 rounded-lg shadow-lg max-w-md">
      <h2 className="text-lg font-semibold">
        From{" "}
        <span className="text-xl font-bold">
          {price} {tourDetails.currency}
        </span>
      </h2>

      <div className="my-4">
        <CustomeDatePicker
          onChange={(newDate) =>
            setPriceRequest((prev) => ({
              ...prev,
              BookDateFrom: newDate,
              BookDateTo: newDate,
            }))
          }
        />
      </div>

      <GuestsSelector
        withChildren
        onAdultsChange={(newCount: number) =>
          setPriceRequest((prev) => ({
            ...prev,
            AdultPax: newCount,
          }))
        }
        onChildrenChange={(newCount: number) =>
          setPriceRequest((prev) => ({
            ...prev,
            ChdPax: newCount,
          }))
        }
        onChildrenAgesChange={(newCount: number[]) =>
          setPriceRequest((prev) => ({
            ...prev,
            ChdAges: newCount,
          }))
        }
      />

      <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4">Book Now</button>

      {tourDetails.recommendation && (
        <div className="flex items-center mt-4">
          <span className="text-green-600">&#10084;</span>
          <p className="ml-2 text-sm">{tourDetails.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
