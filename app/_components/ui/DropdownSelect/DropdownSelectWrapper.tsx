import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const DropdownSelectWrapper = (props: Props) => {
  const { className, children } = props;

  return <div className={`dropdown ${className ? className : ""}`}>{children}</div>;
};

export default DropdownSelectWrapper;
