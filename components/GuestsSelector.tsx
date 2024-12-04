import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import NumberInput from "./ServiceSearch/common/NumberInput";
import ChildAgeInput from "./ServiceSearch/HotelSearch/ChildAgeInput";

type IGuestsProps = {
  withRooms?: boolean;
  withChildren?: boolean;
  onAdultsChange: (count: number) => void;
  onRoomsChange?: (count: number) => void;
  onChildrenChange?: (count: number) => void;
  onChildrenAgesChange?: (ages: number[]) => void;
};

const GuestsSelector = (props: IGuestsProps) => {
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);
  const [roomsCount, setRoomsCount] = useState(1);

  useEffect(() => {
    props.onAdultsChange(adultsCount);
  }, [adultsCount]);

  useEffect(() => {
    props.onChildrenChange && props.onChildrenChange(childrenCount);
  }, [childrenCount]);

  useEffect(() => {
    props.onChildrenAgesChange && props.onChildrenAgesChange(childrenAges);
  }, [childrenAges]);

  const onIncrementChild = () => {
    setChildrenCount((prev) => prev + 1);
    setChildrenAges((prev) => [...prev, 1]);
  };

  const onDecrementChild = () => {
    setChildrenCount((prev) => prev - 1);
    setChildrenAges((prev) => {
      const newArr = [...prev];
      newArr.pop();
      return newArr;
    });
  };

  return (
    <div className="dropdown ss_formInput border p-2">
      <h6 className="ss_formInputTitle">Number of travellers</h6>
      <Toggler
        adultsCount={adultsCount}
        childrenCount={childrenCount}
        roomsCount={roomsCount}
        withRooms={props.withRooms}
        withChildren={props.withChildren}
      />

      <div className="dropdown-menu p-3">
        <div className="d-flex flex-column gap-2">
          {props.withRooms && (
            <RoomsInput
              count={roomsCount}
              onDecrement={() => setRoomsCount((prev) => prev - 1)}
              onIncrement={() => setRoomsCount((prev) => prev + 1)}
            />
          )}

          <AdultsInput
            count={adultsCount}
            onDecrement={() => setAdultsCount((prev) => prev - 1)}
            onIncrement={() => setAdultsCount((prev) => prev + 1)}
          />

          {props.withChildren && (
            <ChildrenInput
              count={childrenCount}
              onDecrement={onDecrementChild}
              onIncrement={onIncrementChild}
            />
          )}

          {childrenCount > 0 && (
            <div>
              <div className="row row-cols-2 g-2 mb-2">
                {childrenAges.map((age, i) => (
                  <ChildAgeInput
                    key={i}
                    value={age}
                    id={i}
                    onChange={(num: number, id: number) => {
                      setChildrenAges((prev) => {
                        let newArr = [...prev];
                        newArr[id] = num;
                        return newArr;
                      });
                    }}
                  />
                ))}
              </div>

              <p className="text-muted fw-light">
                To find a place to stay that fits your entire group along with
                correct prices, we need to know how old your children will be at
                check-out.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type ITogglerProps = {
  adultsCount: number;
  withRooms?: boolean;
  withChildren?: boolean;
  roomsCount?: number;
  childrenCount?: number;
};

const Toggler = (props: ITogglerProps) => {
  return (
    <button
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
      className="ss_dropdownToggler"
    >
      <IoPerson />

      <div>
        {props.withRooms && <span>{props.roomsCount} Rooms - </span>}
        <span>{props.adultsCount} Adults</span>
        {props.withChildren && <span> - {props.childrenCount} Children </span>}
      </div>

      <IoIosArrowDown />
    </button>
  );
};

// /////////////////////////////////////////

type IAdultsProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};
const AdultsInput = (props: IAdultsProps) => {
  return (
    <div className="d-flex justify-content-between align-items-center gap-5">
      <h6>Adults</h6>
      <NumberInput
        min={0}
        max={10}
        value={props.count}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
      />
    </div>
  );
};

const ChildrenInput = (props: IAdultsProps) => {
  return (
    <div className="d-flex justify-content-between align-items-center gap-5">
      <h6>Children</h6>
      <NumberInput
        min={0}
        max={10}
        value={props.count}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
      />
    </div>
  );
};

const RoomsInput = (props: IAdultsProps) => {
  return (
    <div className="d-flex justify-content-between align-items-center gap-5">
      <h6>Rooms</h6>
      <NumberInput
        min={0}
        max={3}
        value={props.count}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
      />
    </div>
  );
};

export default GuestsSelector;
