import { useAppSelector } from "@/src/redux/store";
import React from "react";
import { FcAdvance } from "react-icons/fc";

const Facilities = () => {
  const facilities = useAppSelector((state) => state.hotelDetails?.facilities);

  return (
    <div className="hotelDetails_secion">
      <h4 className="fw-normal mb-4">Most Popular Facilities</h4>

      <div className="row">
        {facilities?.map((facility, i) => (
          <div key={i} className="col-6">
            <h6 className="facility fw-light">
              <FcAdvance /> {facility?.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
