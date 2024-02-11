import React from "react";

const ModalTrigger = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div data-bs-toggle="modal" data-bs-target="#bootstrapModal">
      {children}
    </div>
  );
};

export default ModalTrigger;
