import React from "react";
import { v4 } from "uuid";

const FilterCheckbox = (props: any) => {
  return (
    <>
      <h6 className="foxFilter_title">{props.filter.title}</h6>

      {props.filter.options.map((option: any) => {
        const id = v4();
        return (
          <div key={id} className="form-check form-switch">
            <input className="form-check-input" type="checkbox" value="" id={id} />
            <label className="form-check-label fw-normal txtGray mb-1" htmlFor={id}>
              {option.title}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default FilterCheckbox;
