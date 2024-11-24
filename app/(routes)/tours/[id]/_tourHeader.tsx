import React from "react";
// import tourDetails from "@/public/data/Details_tour.json";
import RtsRating from "@/app/_components/ui/RtsRating";
import { CiLocationOn } from "react-icons/ci";
import { formatNumber } from "@/app/_utils/Formatters";

const TourHeader = ({ tourDetails }: { tourDetails: ITourDetails }) => {
  return (
    <div>
      <h3 className="mb-2">{tourDetails.title}</h3>
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
