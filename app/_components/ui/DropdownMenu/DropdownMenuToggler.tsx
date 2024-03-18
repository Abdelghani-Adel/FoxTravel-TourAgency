import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const DropdownMenuToggler = (props: Props) => {
  const { className } = props;
  return (
    <button
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      className={className ? className : ""}
      data-bs-auto-close="outside"
    >
      {props.children}
    </button>
  );
};

export default DropdownMenuToggler;
