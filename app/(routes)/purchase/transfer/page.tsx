"use client";
import MultiSteps from "@/app/_components/ui/MultiSteps/MultiSteps";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import React, { useState } from "react";
import Extras from "./_extras";
import OrderDetails from "./_orderDetails";
import OrderSummary from "./_orderSummary";
import Purchase from "./_purchase";
import TransportForm from "@/app/_components/ServiceSearch/TransportForm/TransportForm";

const steps = ["Extras", "Order Details", "Order Summary", "Purchase"];

const Page = () => {
  useHideLoadingLayer();
  const [currentStep, setCurrentStep] = useState(1);
  const [total, setTotal] = useState(50);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="purchaseTransfer">
      <div className="container pt-2 pb-5">
        <div className="row mb-5">
          <TransportForm />
        </div>

        <div className="row mb-3">
          <div className="col-5 m-auto">
            <MultiSteps currentStep={currentStep} steps={steps} />
          </div>
        </div>

        <div className="row">
          <div className="col-9">
            {currentStep == 1 && <Extras nextStep={nextStep} />}
            {currentStep == 2 && <OrderDetails nextStep={nextStep} prevStep={prevStep} />}
            {currentStep == 3 && <OrderSummary nextStep={nextStep} prevStep={prevStep} />}
            {currentStep == 4 && <Purchase prevStep={prevStep} />}
          </div>

          <div className="col-3">
            <div className="purchase_flightPriceWrapper">
              <h6>Total Transfer Price</h6>

              <p className="price">56$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
