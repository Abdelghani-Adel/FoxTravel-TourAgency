"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type props = {
  children: React.ReactNode;
  id: string;
};

const Modal = (props: props) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.getElementById("foxPortal");
  });

  return ref.current
    ? createPortal(
        <div
          className="modal fade"
          id={props.id}
          tabIndex={-1}
          aria-labelledby={props.id}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">{props.children}</div>
          </div>
        </div>,
        ref.current
      )
    : null;

  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex={-1}
      aria-labelledby={props.id}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
