import { ChangeEvent } from "react";
import { v4 } from "uuid";

type option = {
  value: string;
  label: string;
};

type props = {
  options: option[];
  fieldName: string;
  selectedType: string;
  onChange: (newValue: string | any) => void;
};

const RadioOptions = (props: props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="ss_radioOptionList">
      {props.options.map((option, i) => (
        <div className="form-check" key={v4()}>
          <input
            type="radio"
            className="form-check-input"
            value={option.value}
            name={props.fieldName}
            id={option.value}
            defaultChecked={props.selectedType === option.value}
            onChange={onChangeHandler}
          />
          <label htmlFor={option.value} className="form-check-label">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioOptions;
