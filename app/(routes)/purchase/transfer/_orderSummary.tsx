import React from "react";
import PrevStep from "./_prevStep";
import NextStep from "./_nextStep";
import Image from "next/image";

type Props = {
  nextStep: () => void;
  prevStep: () => void;
};

const OrderSummary = (props: Props) => {
  return (
    <div>
      <div className="mb-3 d-flex gap-3">
        <PrevStep onClick={props.prevStep} />
        <NextStep onClick={props.nextStep} />
      </div>
      <h4 className="textGray mb-2">Order Summary</h4>

      <div className="bg-white p-4 rounded mb-3 boxShadow">
        <h5 className="mb-2">Passenger</h5>
        <div className="d-flex align-items-center">
          <div className="w-100">
            <p className="d-flex gap-3">
              <strong className="w-25 fw-normal">Name:</strong>{" "}
              <span className="fw-light w-100">Abdelghani</span>
            </p>
            <p className="d-flex gap-3">
              <strong className="w-25 fw-normal">Email:</strong>{" "}
              <span className="fw-light w-100">abdelghani@rts.com</span>
            </p>
            <p className="d-flex gap-3">
              <strong className="w-25 fw-normal">Phone:</strong>{" "}
              <span className="fw-light w-100">01099908990</span>
            </p>
          </div>

          <div>
            <Image src="/img/logo.png" width={250} height={60} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded mb-3 boxShadow">
        <h5 className="mb-2">Outward Journey</h5>
        <p className="d-flex gap-3">
          <strong className="w-25 fw-normal">Pickup Location:</strong>{" "}
          <span className="fw-light w-100">Hurghada airport</span>
        </p>
        <p className="d-flex gap-3">
          <strong className="w-25 fw-normal">Flight Arrival:</strong>{" "}
          <span className="fw-light w-100">21 Mar 2024, 01:00PM</span>
        </p>
        <p className="d-flex gap-3">
          <strong className="w-25 fw-normal">Flight Number:</strong>{" "}
          <span className="fw-light w-100">0303</span>
        </p>
        <p className="d-flex gap-3">
          <strong className="w-25 fw-normal">Dropoff Location:</strong>{" "}
          <span className="fw-light w-100">Grand resort, Hurghada</span>
        </p>
        <p className="d-flex gap-3">
          <strong className="w-25 fw-normal">Price:</strong>{" "}
          <span className="fw-light w-100">56$</span>
        </p>
      </div>

      <div className="bg-white p-4 rounded mb-3 boxShadow">
        <h5 className="mb-2">Extras</h5>
      </div>

      <div className="bgGray p-2 rounded text-white text-center boxShadow">
        <p className="fs-4">ORDER TOTAL : $56</p>
      </div>
    </div>
  );
};

export default OrderSummary;
