"use client";
import ImageGallerySwiperCards from "@/src/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import RtsRating from "@/src/components/ui/RtsRating";
import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch } from "@/src/redux/store";
import Itenrary from "@/src/routes/package/Itenrary";
import TransportaionLine from "@/src/routes/package/TransportaionLine";
import { getPackageDetails } from "@/src/services/packageServices";
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
      <div className="row mb-3">
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

      <Itenrary />
      <Itenrary />
      <Itenrary />
      <Itenrary />
    </div>
  );
};

export default Page;
