// import tourDetails from "@/public/data/Details_tour.json";

const TourBookingCard = ({ tourDetails }: { tourDetails: ITourDetails }) => {
  return (
    <div className="card p-4 boxShadow d-flex flex-column gap-4">
      <p className="fs-2">
        <span className="fw-light">from</span> {tourDetails.price}
        {tourDetails.currency}
      </p>
      <button className="foxBtn secondBtn w-100">Book Now</button>
    </div>
  );
};

export default TourBookingCard;
