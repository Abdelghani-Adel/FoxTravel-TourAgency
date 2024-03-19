import React from "react";
import PrevStep from "./_prevStep";

type Props = {
  prevStep: () => void;
};

const Purchase = (props: Props) => {
  return (
    <div>
      <div className="mb-3 d-flex gap-3">
        <PrevStep onClick={props.prevStep} />
      </div>

      <h3 className="textGray text-center">Purchase</h3>
      <p className="textGray text-center">
        Will be implemented on activating payments on the website...
      </p>
    </div>
  );
};

export default Purchase;
