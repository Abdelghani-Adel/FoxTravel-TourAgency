import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const ServiceSearchController = (props: Props) => {
  return (
    <div className="serviceSearch_controller">
      <h6 className="fw-light">{props.title}</h6>
      <div className="serviceSearch_controller-inner">{props.children}</div>
    </div>
  );
};

export default ServiceSearchController;
