import DateInput from "@/app/_components/ServiceSearch/common/DateInput";
import FlightPassengers from "@/app/_components/ServiceSearch/FlightSearch/FlightPassengers";
import tourDetails from "@/public/data/Details_tour.json";

const TourBookingCard = () => {
  return (
    <div className="card p-4 boxShadow d-flex flex-column gap-4">
      <p className="fs-2">
        <span className="fw-light">from</span> {tourDetails.price}
        {tourDetails.currency}
      </p>
      {/* <DateInput title="Date" defaultValue={new Date()} onChange={() => {}} placeholder="Choose" />
      <FlightPassengers /> */}
      <button className="foxBtn secondBtn w-100">Book Now</button>
    </div>
  );
};

export default TourBookingCard;
