"use client";
import ImageGallerySwiperCards from "@/src/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import Facilities from "@/src/routes/hotel/Facilities";
import Header from "@/src/routes/hotel/Header";
import HelpfulFacts from "@/src/routes/hotel/HelpfulFacts";
import Highlights from "@/src/routes/hotel/Highlights";
import HotelRoomOld from "@/src/routes/hotel/HotelRoomOld";
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
import HotelRoomsTable from "@/src/routes/hotel/HotelRoomsTable";
import ServiceSearch from "@/src/components/ServiceSearch/ServiceSearch";
import HotelSearchForm from "@/src/components/ServiceSearch/HotelSearchForm";

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

      <div className="row mb-2">
        <div className="col-12 col-md-8">
          <HotelSearchForm />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <HotelRoomsTable />
        </div>
      </div>

      <div className="row hotelDetails_secion" id="hotelReviews">
        <div className="col-12">
          <ReviewStatistics />
        </div>
      </div>

      <div className="row hotelDetails_secion" id="hotelGeneralInfo">
        <div className="col-12">
          <HelpfulFacts />
        </div>
      </div>
    </div>
  );
};

export default Page;
