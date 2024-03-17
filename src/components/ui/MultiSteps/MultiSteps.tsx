import { v4 } from "uuid";

type props = {
  currentStep: number;
  steps: string[];
};

const MultiSteps = (props: props) => {
  const { currentStep, steps } = props;

  return (
    <div className="multiSteps">
      {steps.map((step, index) => (
        <div
          className={`step ${currentStep > index + 1 && "done"} 
          ${currentStep == index + 1 && "active"}`}
        >
          <p key={v4()} className="number">
            <span>{index + 1}</span>
          </p>

          <p className="title">{step}</p>
        </div>
      ))}

      {/* <ul className="numberList">
        {steps.map((step, index) => (
          <li key={v4()} className={`step ${currentStep >= index + 1 && "done"}`}>
            <span>{index + 1}</span>
          </li>
        ))}
      </ul>

      <ul className="titleList">
        {steps.map((step, index) => (
          <li key={v4()} className={`title ${currentStep >= index + 1 && "done"}`}>
            <span>{step}</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default MultiSteps;
