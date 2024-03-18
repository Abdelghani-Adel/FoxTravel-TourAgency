import React from "react";
import NextStep from "./_nextStep";
import PrevStep from "./_prevStep";

type Props = {
  nextStep: () => void;
  prevStep: () => void;
};

const OrderDetails = (props: Props) => {
  return (
    <div>
      <form>
        <div className="mb-3 d-flex gap-3">
          <PrevStep onClick={props.prevStep} />
          <NextStep onClick={props.nextStep} />
        </div>

        <div data-aos="fade-right">
          <h4 className="textGray mb-2">Order Details</h4>

          <div className="p-3 bg-white rounded mb-3 boxShadow">
            <h4 className="textGray mb-2">Outward Journey</h4>

            <div className="d-flex gap-4 align-items-center">
              <div className="shrink-0">
                <p className="fw-light">Your transfer is from</p>
                <h6>Hurghada Airport (HRG)</h6>
              </div>

              <div className="mb-3 w-100">
                <label htmlFor="flightNumber" className="form-label fw-light">
                  Flight Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="flightNumber"
                  required
                  placeholder="Enter your flight number"
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-white rounded boxShadow">
            <h4 className="textGray mb-2">Passenger Information</h4>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                placeholder="Type your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailConfirm" className="form-label">
                Email confirmation
              </label>
              <input
                type="email"
                className="form-control"
                id="emailConfirm"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
