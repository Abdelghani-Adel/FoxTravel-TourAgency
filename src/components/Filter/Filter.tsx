import React from "react";
import filterData from "@/public/data/Filter.json";
import { v4 } from "uuid";
import FilterCheckbox from "./FilterCheckbox";
import FilterRadio from "./FilterRadio";
import FilterRange from "./FilterRange";

const Filter = () => {
  return (
    <div className="foxFilter">
      {filterData.map((filter) => (
        <div key={v4()} className="foxFilter_group">
          {filter.type === "checkbox" && <FilterCheckbox filter={filter} />}
          {filter.type === "radio" && <FilterRadio filter={filter} />}
          {filter.type === "range" && <FilterRange filter={filter} />}
        </div>
      ))}
    </div>
  );
};

export default Filter;
