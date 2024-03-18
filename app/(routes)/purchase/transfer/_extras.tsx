import React from "react";
import extras from "@/public/data/FlightExtras.json";
import { v4 } from "uuid";
import NextStep from "./_nextStep";

type Props = {
  nextStep: () => void;
};

const Extras = (props: Props) => {
  return (
    <div>
      <div className="mb-4">
        <NextStep onClick={props.nextStep} />
      </div>

      <div data-aos="fade-right">
        <div className="mb-4">
          <h4 className="textGray mb-2">Addons we can provide for you</h4>
          <div className="d-flex flex-column gap-3">
            {extras.addons.map((addon) => (
              <div key={v4()} className="transferExtra">
                <div>
                  <h5 className="textSecondary">{addon.title}</h5>
                  <p className="txtGray fw-normal">{addon.description}</p>
                </div>

                <div className="text-center">
                  <p>{addon.price.length == 0 ? "FREE" : `${addon.price}$`}</p>
                  <button className="foxBtn secondBtn">ADD</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="textGray mb-2">Extra services you can request</h4>
          <div className="d-flex flex-column gap-3">
            {extras.extraServices.map((service) => (
              <div key={v4()} className="transferExtra">
                <div>
                  <h5 className="textSecondary">{service.title}</h5>
                  <p className="txtGray fw-normal">{service.description}</p>
                </div>

                <div className="text-center">
                  <p>{service.price.length == 0 ? "FREE" : `${service.price}$`}</p>
                  <button className="foxBtn secondBtn">ADD</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extras;
