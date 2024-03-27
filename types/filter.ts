type IRangeFilterType = {
  filterType: "range";
  title: string;
  min: number;
  max: number;
  default: [number, number];
  step: number;
};

type IRadioFilterType = {
  filterType: "radio";
  title: string;
  options: string[];
};

type ICheckBoxFilterType = {
  filterType: "checkbox";
  title: string;
  options: string[];
};

type IFilterSingle = IRangeFilterType | IRadioFilterType | ICheckBoxFilterType;

type IFilterType = IFilterSingle[];
