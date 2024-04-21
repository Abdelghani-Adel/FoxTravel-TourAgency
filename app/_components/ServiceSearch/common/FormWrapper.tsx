import React from "react";

type Iprops = {
  onSubmit: () => void;
  children: React.ReactNode;
};

const FormWrapper = (props: Iprops) => {
  const { children, onSubmit } = props;
  return (
    <div className="ss_formWrapper">
      <form className="ss_formWrapperInner">{children}</form>
    </div>
  );
};

export default FormWrapper;
