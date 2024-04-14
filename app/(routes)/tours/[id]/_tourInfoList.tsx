import React from "react";
import tourDetails from "@/public/data/Details_tour.json";
import TourInfo from "./_tourInfo";
import { v4 } from "uuid";

const TourInfoList = () => {
  return tourDetails.information.map((info) => (
    <div key={v4()} className="col-12 col-md-6">
      <TourInfo info={info} />
    </div>
  ));
};

export default TourInfoList;
