import React from "react";
import PlaneTransport from "./PlaneTransport";
import BusTransport from "./BusTransport";

type props = {
  line: {
    id: number;
    from: string;
    to: string;
    transportationType: string;
  }[];
};

const TransportaionLine = (props: props) => {
  return (
    <div className="transportationLine d-flex flex-column flex-md-row">
      {props.line.map((stop: any, i: any) => (
        <div key={stop.id} className="transportationStop fw-normal">
          <span>{stop.from}</span>
          <span>
            {stop.transportationType === "Flight" ? <PlaneTransport /> : <BusTransport />}
          </span>
          <span>{stop.to}</span>
        </div>
      ))}
    </div>
  );
};

export default TransportaionLine;
