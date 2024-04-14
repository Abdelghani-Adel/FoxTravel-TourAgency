import React from "react";
import { GrGroup } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import tourDetails from "@/public/data/Details_tour.json";

const TourSnapshot = () => {
  return (
    <div>
      <h4 className="mb-3 textSecondary">Tour Snapshot</h4>

      <div className="d-flex gap-5">
        <div className="d-flex gap-1 align-items-end">
          <div className="fs-1 textSecondary me-1">
            <IoTimeOutline />
          </div>

          <div>
            <p className="mb-0 textSecondary">Duration</p>
            <p className="mb-0 fw-light">{tourDetails.snapshot.duration}</p>
          </div>
        </div>

        <div className="d-flex gap-1 align-items-end">
          <div className="fs-1 textSecondary me-1">
            <GrGroup />
          </div>

          <div>
            <p className="mb-0 textSecondary">Group Size</p>
            <p className="mb-0 fw-light">{tourDetails.snapshot.groupSize}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSnapshot;
