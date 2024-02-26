"use client";
import ImageGallerySwiperCards from "@/src/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import Facilities from "@/src/routes/hotel/Facilities";
import Header from "@/src/routes/hotel/Header";
import HelpfulFacts from "@/src/routes/hotel/HelpfulFacts";
import Highlights from "@/src/routes/hotel/Highlights";
import HotelRoom from "@/src/routes/hotel/HotelRoom";
import Overview from "@/src/routes/hotel/Overview";
import ReviewStatistics from "@/src/routes/hotel/ReviewStatistics";
import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React, { useEffect, useState } from "react";
import hotelDetails from "@/public/data/hotelDetails.json";
import { hotelDetailsActions } from "@/src/redux/slices/hotelDetails";
import { decrypt } from "@/src/utils/Cryptojs";
import parse from "html-react-parser";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import { getHotelDetails } from "@/src/services/hotelServices";
import PageNavigator from "@/src/routes/hotel/PageNavigator";
import Rooms from "@/src/routes/hotel/Rooms";

const Page = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const [hotel, setHotel] = useState<any>();
  const encryptedId = params.id;
  const hotelId = decrypt(encryptedId);

  useEffect(() => {
    const getHotel = async () => {
      const response = await getHotelDetails(hotelId);
      setHotel(response);
      dispatch(hotelDetailsActions.setHotelDetails(response));
      dispatch(loaderActions.hideLoadingOverlay());
    };

    getHotel();
  }, []);

  return (
    <div className="container mt-4 mb-5">
      <Header />
      <PageNavigator />

      <div className="row hotelDetails_secion">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <Overview />
          <Facilities />
          <Highlights />
        </div>

        <div className="col-12 col-lg-4 order-1">
          <div className="hotelImageWrapper">
            <ImageGallerySwiperCards />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Rooms />
        </div>
      </div>

      {/* <div className="row" id="hotelPrices">
        {hotelDetails?.availability?.availableRooms?.map((room, i) => (
          <div key={i} className="col-12 hotelDetails_secion">
            <HotelRoom room={room} />
          </div>
        ))}
      </div> */}

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
