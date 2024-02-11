"use client";
import ImageGallerySwiperCards from "@/src/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import RouteWrapper from "@/src/components/pages/common/RouteWrapper";
import BusTransport from "@/src/components/pages/packageDetails/BusTransport";
import PlaneTransport from "@/src/components/pages/packageDetails/PlaneTransport";
import TransportaionLine from "@/src/components/pages/packageDetails/TransportaionLine";
import RtsRating from "@/src/components/ui/RtsRating";
import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch } from "@/src/redux/store";
import { getPackageDetails } from "@/src/services/getPackageDetails";
import Link from "next/link";
import { useEffect, useState } from "react";

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
          <h3 className="mb-0">{packageDetails.title}</h3>
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
          {packageDetails?.transportation?.map((line: any, i: any) => (
            <TransportaionLine key={line.id} line={line} />
          ))}

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
          <div key={plan.id} className="col-6">
            <div className="cityPlan">
              <div className="cityPlan_header">
                <h5 className="mb-0">{plan.cityName} Schedule</h5>
              </div>
              <h6 className="fw-normal">Duration : {plan.duration}</h6>

              <div className="d-flex align-items-center gap-2">
                <h6 className="fw-normal mb-0">Accommodation: </h6>
                <Link href="/hotels/1" className="cityPlan_hotel">
                  <span>{plan.accommodation.hotelName}</span>
                </Link>
              </div>

              {plan.activities.map((activity: any, i: any) => (
                <div key={activity.id}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
