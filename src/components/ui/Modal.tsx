import React from "react";

type props = {
  children: React.ReactNode;
  id: string;
};

const Modal = (props: props) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex={-1}
      aria-labelledby="bootstrapModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
