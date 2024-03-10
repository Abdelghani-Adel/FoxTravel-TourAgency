import React, { JSXElementConstructor, ReactNode } from "react";
import Collapsible from "react-collapsible";

type ICollabseProps = {
  Header: React.FC;
  children: ReactNode;
};

const Collabse = (props: ICollabseProps) => {
  const { Header } = props;
  return (
    <Collapsible open={true} trigger={<Trigger Header={Header} />}>
      <div className="collapsibleContent">{props.children}</div>
    </Collapsible>
  );
};

type ITriggerProps = {
  Header: React.FC;
};

const Trigger = (props: ITriggerProps) => {
  const { Header } = props;
  return (
    <div className="collabsibleHeader">
      <Header />
    </div>
  );
};

export default Collabse;
