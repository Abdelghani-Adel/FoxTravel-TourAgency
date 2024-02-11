import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

type IChild = {
  age: number;
};

type props = {
  childs: IChild[];
  incrementChidls: () => void;
  decrementChilds: () => void;
  incrementChildAge: (childIndex: number) => void;
  decrementChildAge: (childIndex: number) => void;
};

const minChidls = 0;
const maxChilds = 5;
const minChildAge = 1;
const maxChildAge = 7;

const HotelGuestsChilds = (props: props) => {
  const { childs, incrementChidls, decrementChilds, incrementChildAge, decrementChildAge } = props;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">Childs: </h5>

        <div className="numberInput">
          <button
            type="button"
            className="minus"
            disabled={childs ? childs.length == minChidls : true}
            onClick={decrementChilds}
          >
            <LuMinus />
          </button>
          <span className="number">{props.childs.length}</span>
          <button
            type="button"
            className="minus"
            disabled={childs ? childs.length == maxChilds : false}
            onClick={incrementChidls}
          >
            <LuPlus />
          </button>
        </div>
      </div>

      {childs && (
        <div>
          {childs.map((child: IChild, i: any) => (
            <div key={i} className="d-flex justify-content-between align-items-center ps-2 mb-1">
              <h6 className="mb-0">Child {i + 1} age</h6>

              <div className="numberInput sm">
                <button
                  type="button"
                  className="minus"
                  disabled={child.age == minChildAge}
                  onClick={() => decrementChildAge(i)}
                >
                  <LuMinus />
                </button>
                <span className="number">{child.age}</span>
                <button
                  type="button"
                  className="minus"
                  disabled={child.age == maxChildAge}
                  onClick={() => incrementChildAge(i)}
                >
                  <LuPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HotelGuestsChilds;
