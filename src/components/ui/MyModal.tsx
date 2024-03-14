import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const MyModal = (props: Props) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      ref.current = document.body;
    }
  }, [props]);

  return ref.current
    ? createPortal(
        <div className={`myModal ${props.show ? "active" : ""}`}>
          <div className="myModal_content">{props.children}</div>
          <div className="myModal_backdrop" onClick={props.onClose} />
        </div>,
        ref.current
      )
    : null;
};

export default MyModal;

type Props = {
  show: boolean;
  children: React.ReactNode;
  onClose: () => void;
};
