import React from "react";

const Button = (props: IProps) => {
  const { onClick, btnType, className, children, disabled } = props;

  return (
    <button
      type={btnType || "button"}
      className={`${className} _btn`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

type IProps = {
  onClick: () => void;
  children: React.ReactNode;
  btnType?: "button" | "reset" | "submit";
  className?: string;
  disabled?: boolean;
  small?: boolean;
  secondary?: boolean;
};
