"use client";
import ImageGallerySwiperCards from "@/src/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import RouteWrapper from "@/src/routes/common/RouteWrapper";
import BusTransport from "@/src/routes/packageDetails/BusTransport";
import PlaneTransport from "@/src/routes/packageDetails/PlaneTransport";
import TransportaionLine from "@/src/routes/packageDetails/TransportaionLine";
import RtsRating from "@/src/components/ui/RtsRating";
import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch } from "@/src/redux/store";
import { getPackageDetails } from "@/src/services/getPackageDetails";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Page = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const packageId = params.id;
  const [packageDetails, setPackageDetails] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPackageDetails(packageId);
      setPackageDetails(response);
      dispatch(loaderActions.hideLoadingOverlay());
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <div className="d-flex justify-content-between align-items-center flex-column gap-3 mb-2 flex-md-row">
            <h3 className="mb-0">{packageDetails.title}</h3>
            <button className="foxBtn secondBtn">Book this package</button>
          </div>

          <div className="d-flex justify-content-between align-item-center mb-4">
            <div>
              <span className="txtGray fw-normal">
                <RtsRating readonly rating={4.5} /> (215)
              </span>
              <p className="mb-0 txtGray fw-normal">
                {packageDetails.duration} : {packageDetails.startDate} ~ {packageDetails.endDate}
              </p>
            </div>
            <p className="foxPrice">
              <span className="currency">{packageDetails.currency}</span>
              <span className="amount">{packageDetails.price}</span>
            </p>
          </div>

          <p className="txtGray">{packageDetails.description}</p>

          <h5 className="txtSecondary fw-bold">Transportation</h5>
          <div className="d-flex flex-md-column gap-1">
            {packageDetails?.transportation?.map((line: any, i: any) => (
              <TransportaionLine key={i} line={line} />
            ))}
          </div>

          {/* <PlaneTransport />
          <BusTransport /> */}
        </div>

        <div className="col-12 col-lg-4 order-1">
          <div className="hotelImageWrapper">
            <ImageGallerySwiperCards />
          </div>
        </div>
      </div>

      <div className="row gx-3">
        {packageDetails?.cityPlans?.map((plan: any, i: any) => (
          <div key={plan.id} className="col-12 col-lg-6">
            <div className="cityPlan">
              <div className="cityPlan_header">
                <h5 className="mb-0">{plan.cityName} Schedule</h5>
              </div>

              <div className="d-flex align-items-center gap-3">
                <h6 className="mb-0">
                  Duration : <span className="fw-light">{plan.duration}</span>
                </h6>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0">Accommodation: </h6>
                  <Link href="/hotels/1" className="fw-light">
                    <span>{plan.accommodation.hotelName}</span>
                  </Link>
                </div>
              </div>

              {plan.activities.map((activity: any, i: any) => (
                <div key={activity.id}>
                  <h6 className="mb-0">
                    {activity.title} <span className="fw-light">({activity.duration})</span>
                  </h6>
                  <p className="fw-normal txtGray mb-0">
                    On {activity.date} from {activity.startTime} to {activity.endTime}
                  </p>

                  <div className="d-flex gap-2">
                    {activity.includes?.map((item: any, i: any) => (
                      <p key={i} className="fw-normal txtGray">
                        <IoMdCheckmarkCircle className="txtSecondary" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
