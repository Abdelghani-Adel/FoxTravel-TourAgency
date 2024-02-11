import React from "react";

const Modal = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div
      className="modal fade"
      id="bootstrapModal"
      tabIndex={-1}
      aria-labelledby="bootstrapModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
