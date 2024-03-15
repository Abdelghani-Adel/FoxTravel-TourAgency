import React, { useEffect, useState } from "react";
import Number from "./Number";
import { v4 } from "uuid";
import ChildAge from "./ChildAge";

type props = {
  onChildrenChange: (newChilds: number[]) => void;
};

const Children = (props: props) => {
  const [childsCount, setChildsCount] = useState(0);
  const [childsAges, setChildsAges] = useState<number[]>([]);

  const onCountChange = (newChildren: number) => setChildsCount(newChildren);

  const onChildAgeChange = (newAge: number, index: number) => {
    setChildsAges((prev) => {
      const updatedChilds = [...prev];
      updatedChilds[index] = newAge;
      return updatedChilds;
    });
  };

  useEffect(() => {
    if (childsCount > childsAges.length) {
      setChildsAges((prev) => [...prev, 1]);
    } else if (childsCount < childsAges.length) {
      setChildsAges((prev) => prev.slice(0, -1));
    }
  }, [childsCount]);

  useEffect(() => {
    props.onChildrenChange(childsAges);
  }, [childsAges]);

  return (
    <>
      <Number initValue={0} min={0} max={8} title="Children" onChange={onCountChange} />

      {childsCount > 0 && (
        <div>
          <div className="row row-cols-2 g-2 mb-2">
            {childsAges.map((age, i) => (
              <ChildAge key={v4()} id={i} value={age} onChange={onChildAgeChange} />
            ))}
          </div>

          <p className="text-muted">
            To find a place to stay that fits your entire group along with correct prices, we need
            to know how old your children will be at check-out.
          </p>
        </div>
      )}
    </>
  );
};

export default Children;
