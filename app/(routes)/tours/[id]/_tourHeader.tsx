import React from "react";
// import tourDetails from "@/public/data/Details_tour.json";
import RtsRating from "@/app/_components/ui/RtsRating";
import { CiLocationOn } from "react-icons/ci";
import { formatNumber } from "@/app/_utils/Formatters";

const TourHeader = ({ tourDetails }: { tourDetails: ITourDetails }) => {
  return (
    <div>
      <h3 className="mb-0">{tourDetails.title}</h3>
      <div className="d-flex gap-3">
        <span>
          <RtsRating rating={tourDetails.rating} readonly />
          <span className="txtGray fw-light"> ({formatNumber(tourDetails.totalReviews)})</span>
        </span>

        <span className="textGray fw-light">
          <CiLocationOn className="me-1" />
          {tourDetails.location}
        </span>
      </div>
    </div>
  );
};

export default TourHeader;
