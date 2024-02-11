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
          <h3>{packageDetails.title}</h3>
          <div className="d-flex justify-content-between align-item-center mb-3">
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
    </div>
  );
};

export default Page;
