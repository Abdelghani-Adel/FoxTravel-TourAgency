import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useAppSelector } from "@/app/_redux/store";

const Overview = () => {
  const overview = useAppSelector((state) => state.hotelDetails?.description);
  const [showMore, setShowMore] = useState(false);
  const [shownText, setShownText] = useState("");

  const toggle = () => setShowMore((prev) => !prev);

  useEffect(() => {
    showMore ? setShownText(overview) : setShownText(overview.substring(0, 300));
  }, [showMore]);

  return (
    <div className="hotelDetails_secion" id="hotelOverview">
      <h5 className="mb-1">Overview</h5>
      <div className="fw-light mb-1">{parse(shownText ? shownText : "<p></p>")}</div>
      <button className="showMoreBtn" onClick={toggle}>
        show {showMore ? "less" : "more"}
      </button>
    </div>
  );
};

export default Overview;
