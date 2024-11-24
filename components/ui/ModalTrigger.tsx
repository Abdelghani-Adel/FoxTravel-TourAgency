"use client";
import React from "react";

type props = {
  children: React.ReactNode;
  modalId: string;
};

const ModalTrigger = ({ children, modalId }: props) => {
  return (
    <div data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
      {children}
    </div>
  );
};

export default ModalTrigger;
