"use client";
import SwiperNavigate from "@/app/_components/Swipers/SwiperNavigate";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import tourDetails from "@/public/data/Details_tour.json";
import TourBookingCard from "./_tourBookingCard";
import TourHeader from "./_tourHeader";
import TourInfoList from "./_tourInfoList";
import TourSnapshot from "./_tourSnapshot";
import ReviewStatistics from "./_reviewStatistics";

const Page = ({ params }: { params: { id: string } }) => {
  useHideLoadingLayer();

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <TourHeader />
      </div>

      <div className="row mt-1 gx-4 gy-4">
        <div className="col-8">
          <SwiperNavigate images={tourDetails.images} />
        </div>

        <div className="col-4">
          <TourBookingCard />
        </div>

        <div className="col-12 col-md-8">
          <TourSnapshot />
        </div>

        <div className="col-12 col-md-8">
          <hr />
        </div>

        <div className="col-12 col-md-8">
          <h4 className="mb-3 textSecondary">Overview</h4>
          <p className="txtGray fw-light">{tourDetails.overview}</p>
        </div>

        <hr />

        <TourInfoList />

        <hr />

        <ReviewStatistics />
      </div>
    </div>
  );
};

export default Page;
