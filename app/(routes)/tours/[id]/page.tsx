import SwiperNavigate from "@/app/_components/Swipers/SwiperNavigate";
import TourBookingCard from "./_tourBookingCard";
import TourHeader from "./_tourHeader";
import TourInfoList from "./_tourInfoList";
import TourSnapshot from "./_tourSnapshot";
import { decrypt } from "@/app/_utils/Cryptojs";
import { getTourDetails } from "@/services/tourServices";
import TourInfo from "./_tourInfo";
import { v4 } from "uuid";
import { RxDotFilled } from "react-icons/rx";
import BookingCard from "./BookingCard";
import { GiCheckMark } from "react-icons/gi";

const HTML =
  "<ul><li><span style='background-color: rgb(255, 255, 255); font-size: 16px; font-family: Jost, sans-serif; color: rgb(33, 37, 41);'> Confirmation will be received at time of booking</span></li><li><span style='background-color: rgb(255, 255, 255); font-size: 16px; font-family: Jost, sans-serif; color: rgb(33, 37, 41);'> Departs at 8am (boarding at 7.30am), Victoria Coach Station Gate 1-5, 164 Buckingham Palace Road, London, SW1W 9TP</span></li><li><span style='background-color: rgb(255, 255, 255); font-size: 16px; font-family: Jost, sans-serif; color: rgb(33, 37, 41);'> Please note: the tour itinerary and order may change</span></li></ul><p><br></p>";

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
          <BookingCard tourDetails={tourDetails} />
          {/* <TourBookingCard tourDetails={tourDetails} /> */}
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

        {tourDetails.information.map((info) => {
          if (!info.details || info.details.length < 1) return null;
          return (
            <div key={v4()} className="col-12 col-md-6 forceStyle">
              <h4 className="mb-3 textSecondary">{info.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: info.details }}></div>
            </div>
          );
        })}
      </div>

      <div className="row">
        {tourDetails.inclusions.map((x) => (
          <div key={v4()} className="col-12 col-md-6">
            <h4 className="mb-3 textSecondary">{x.title}</h4>
            {x.details.map((detail: any) => (
              <p key={v4()} className="fw-light flex items-center space-x-2">
                {x.title === "Inclusions" ? (
                  <GiCheckMark className="text-green-500" />
                ) : (
                  <span className="font-bold text-red-500">X</span>
                )}
                <span>{detail}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
