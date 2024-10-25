import SwiperNavigate from "@/app/_components/Swipers/SwiperNavigate";
import TourBookingCard from "./_tourBookingCard";
import TourHeader from "./_tourHeader";
import TourInfoList from "./_tourInfoList";
import TourSnapshot from "./_tourSnapshot";
import { decrypt } from "@/app/_utils/Cryptojs";
import { getTourDetails } from "@/app/_services/tourServices";

const Page = async ({ params }: { params: { id: string } }) => {
  const tourId = decrypt(params.id);
  const { data, error } = await getTourDetails(tourId);
  const tourDetails: ITourDetails = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <TourHeader tourDetails={tourDetails} />
      </div>

      <div className="row mt-1 gx-4 gy-4">
        <div className="col-12 col-md-8">
          <SwiperNavigate images={tourDetails.images} />
        </div>

        <div className="col-12 col-md-4">
          <TourBookingCard tourDetails={tourDetails} />
        </div>

        <div className="col-12 col-md-8">
          <TourSnapshot tourDetails={tourDetails} />
        </div>

        <div className="col-12 col-md-8">
          <hr />
        </div>

        <div className="col-12 col-md-8">
          <h4 className="mb-3 textSecondary">Overview</h4>
          <p className="txtGray fw-light">{tourDetails.overview}</p>
        </div>

        <hr />

        <TourInfoList tourDetails={tourDetails} />

        <hr />

        {/* <ReviewStatistics /> */}
      </div>
    </div>
  );
};

export default Page;
