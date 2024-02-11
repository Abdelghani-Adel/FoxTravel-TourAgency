import { useAppSelector } from "@/src/redux/store";
import React from "react";
import { MdInsights } from "react-icons/md";

const Highlights = () => {
  const highlights = useAppSelector((state) => state.hotelDetails?.highlights);

  return (
    <div className="hotelHighlights hotelDetails_secion">
      <div className="row">
        <h4 className="fw-normal mb-4">Property Highlights</h4>
        {highlights?.map((highlight, i) => (
          <div key={i} className="col-6 col-md-3">
            <div className="highlight">
              <MdInsights className="highlightIcon" />
              <p className="highlightTitle fw-light">{highlight?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
