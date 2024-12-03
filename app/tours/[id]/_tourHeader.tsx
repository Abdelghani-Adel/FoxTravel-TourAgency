import React from "react";
// import tourDetails from "@/public/data/Details_tour.json";
import RtsRating from "@/components/ui/RtsRating";
import { CiLocationOn } from "react-icons/ci";
import { formatNumber } from "@/utils/Formatters";

const TourHeader = ({ tourDetails }: { tourDetails: ITourDetails }) => {
  return (
    <div>
      <h1 className="mb-2 font-bold">{tourDetails.title}</h1>
      <div className="flex space-x-3">
        <span>
          <RtsRating rating={tourDetails.rating} readonly />
          <span className="txtGray fw-light">
            {" "}
            ({formatNumber(tourDetails.totalReviews)})
          </span>
        </span>

        <span className="text-gray-400 font-light flex items-center">
          <CiLocationOn className="me-1" />
          <span>{tourDetails.location}</span>
        </span>
      </div>
    </div>
  );
};

export default TourHeader;
