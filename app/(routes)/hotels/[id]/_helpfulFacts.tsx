import { useAppSelector } from "@/app/_redux/store";
import React from "react";
import { BsInfo } from "react-icons/bs";

const HelpfulFacts = () => {
  const facts = useAppSelector((state) => state.hotelDetails?.helpfulFacts);

  return (
    <div>
      <h4 className="fw-normal mb-4">Some helpful facts</h4>

      <div className="row row-cols-2 row-cols-lg-4 g-3">
        {facts?.map((fact, i) => (
          <div key={i} className="col">
            <h6>
              <BsInfo /> <span className="fw-normal">{fact.title}</span> :{" "}
              <span className="fw-light">{fact.info}</span>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpfulFacts;
