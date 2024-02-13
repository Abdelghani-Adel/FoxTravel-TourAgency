import React from "react";
import trips from "@/public/data/TripInspirationsCards.json";
import TripCard from "../../components/Cards/TripCard";

const TripInspiration = () => {
  return (
    <div className="section">
      <div className="tripInspirations">
        <h2 className="text-center mb-5 fw-bold">Get inspiration for your next trip</h2>
        <div className="row g-4">
          {trips.map((trip, i) => (
            <div
              key={trip.id}
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* <TripCard image={trip.image} startDate={trip.startDate} title={trip.title} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripInspiration;
