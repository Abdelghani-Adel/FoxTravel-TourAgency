"use client";
import ImageGallerySwiperCards from "@/src/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import Facilities from "@/src/components/pages/HotelDetails/Facilities";
import Header from "@/src/components/pages/HotelDetails/Header";
import HelpfulFacts from "@/src/components/pages/HotelDetails/HelpfulFacts";
import Highlights from "@/src/components/pages/HotelDetails/Highlights";
import HotelRoom from "@/src/components/pages/HotelDetails/HotelRoom";
import Overview from "@/src/components/pages/HotelDetails/Overview";
import ReviewStatistics from "@/src/components/pages/HotelDetails/ReviewStatistics";
import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React, { useEffect } from "react";
import hotelDetails from "@/public/data/hotelDetails.json";
import { hotelDetailsActions } from "@/src/redux/slices/hotelDetails";
import { decrypt } from "@/src/utils/Cryptojs";
import parse from "html-react-parser";

const Page = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hotelDetailsActions.setHotelDetails(hotelDetails));
    dispatch(loaderActions.hideLoadingOverlay());
  }, []);

  return (
    <div className="container mt-4 mb-5">
      <Header />

      <div className="row hotelDetails_secion">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <Highlights />
          <Facilities />
          <Overview />
        </div>

        <div className="col-12 col-lg-4 order-1">
          <div className="hotelImageWrapper">
            <ImageGallerySwiperCards />
          </div>
        </div>
      </div>

      <div className="row">
        {hotelDetails?.availability?.availableRooms?.map((room, i) => (
          <div key={i} className="col-12 hotelDetails_secion">
            <HotelRoom room={room} />
          </div>
        ))}
      </div>

      <div className="row hotelDetails_secion">
        <div className="col-12">
          <ReviewStatistics />
        </div>
      </div>

      <div className="row hotelDetails_secion">
        <div className="col-12">
          <HelpfulFacts />
        </div>
      </div>
    </div>
  );
};

export default Page;
