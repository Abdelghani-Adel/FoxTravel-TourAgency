"use client";
import TransportSearch from "@/components/ServiceSearch/TransportSearch/TransportSearch";
import MultiSteps from "@/components/ui/MultiSteps/MultiSteps";
import { useState } from "react";
import Extras from "./_extras";
import OrderDetails from "./_orderDetails";
import OrderSummary from "./_orderSummary";
import Purchase from "./_purchase";

const steps = ["Extras", "Order Details", "Order Summary", "Purchase"];

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [total, setTotal] = useState(50);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="purchaseTransfer">
      <div className="container pt-2 pb-5">
        <div className="row mb-5">
          <TransportSearch />
        </div>

        <div className="row mb-3">
          <div className="m-auto">
            <MultiSteps currentStep={currentStep} steps={steps} />
          </div>
        </div>

        <div className="row">
          <div className="col-9">
            {currentStep == 1 && <Extras nextStep={nextStep} />}
            {currentStep == 2 && (
              <OrderDetails nextStep={nextStep} prevStep={prevStep} />
            )}
            {currentStep == 3 && (
              <OrderSummary nextStep={nextStep} prevStep={prevStep} />
            )}
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
