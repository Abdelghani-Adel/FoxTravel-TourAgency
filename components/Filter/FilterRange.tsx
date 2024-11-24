import React, { useEffect, useRef, useState } from "react";

//@ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const FilterRange = (props: any) => {
  const { filter } = props;
  const [min, setMin] = useState(filter.min);
  const [max, setMax] = useState(filter.max);
  const [from, setFrom] = useState(filter.min);
  const [to, setTo] = useState(filter.max);
  const [apply, setApply] = useState(1);

  const fromRef = useRef();
  const toRef = useRef();

  const onChangeHandler = (range: any) => {
    setFrom(range[0]);
    setTo(range[1]);
  };

  const onFilterApply = () => {
    setApply((prev) => prev + 1);
  };

  const onInputFromChange = (e: any) => {
    const newValue = e.target.value;
    setFrom(Number(newValue));
    onFilterApply();

    if (newValue > to) {
      setFrom(to);
      setTo(newValue);
    }
  };

  const onInputToChange = (e: any) => {
    const newValue = e.target.value;
    setTo(Number(newValue));
    onFilterApply();

    // setTimeout(() => {
    //   const from = fromRef?.current?.value;
    //   const to = toRef.current?.value;
    //   if (to < from) {
    //     setFrom(to);
    //     setTo(from);
    //   }
    // }, 1000);
  };

  useEffect(() => {
    let priceFilter = from >= to ? [to, from] : [from, to];
    // if (apply > 1) {
    //   props.setItemFlg(filter.itemCateFlg);
    //   props.updateFilterObject(filter, "price", priceFilter);
    // }
  }, [apply]);

  return (
    <>
      <h6 className="foxFilter_title">{filter.title}</h6>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={from}
              onChange={onInputFromChange}
              // ref={fromRef}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={to}
              onChange={onInputToChange}
              // ref={toRef}
            />
          </div>
        </div>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col">
          <RangeSlider
            min={min}
            max={max}
            step={1}
            defaultValue={[60, 200]}
            value={[from, to]}
            onInput={onChangeHandler}
            onThumbDragEnd={onFilterApply}
            onRangeDragEnd={onFilterApply}
          />
        </div>
      </div>
    </>
  );
};

export default FilterRange;
