import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const InputWrapper = (props: Props) => {
  return (
    <div className="ss_inputWrapper">
      <h6 className="fw-light">{props.title}</h6>
      <div className="ss_inputWrapper-inner">{props.children}</div>
    </div>
  );
};

export default InputWrapper;
