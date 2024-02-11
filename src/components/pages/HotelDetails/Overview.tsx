import React from "react";
import parse from "html-react-parser";
import { useAppSelector } from "@/src/redux/store";

const Overview = () => {
  const overview = useAppSelector((state) => state.hotelDetails?.description);
  return (
    <div className="hotelDetails_secion">
      <h4 className="fw-normal mb-4">Overview</h4>
      <div className="fw-light">{parse(overview ? overview : "<p></p>")}</div>
    </div>
  );
};

export default Overview;
