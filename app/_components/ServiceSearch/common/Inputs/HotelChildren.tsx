import { serviceSearchActions } from "@/app/_redux/slices/serviceSearch";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { v4 } from "uuid";
import ChildAge from "./ChildAge";
import Number from "./Number";

const HotelChildren = () => {
  const dispatch = useAppDispatch();

  // Get the current value from redux state.
  const reduxState = useAppSelector((state) => state.serviceSearch.hotel);
  const { childs } = reduxState;

  // Update the childs count.
  const onCountChange = (newChildren: number) => {
    if (newChildren > childs.length) {
      const newChilds = [...reduxState.childs, 1];
      dispatch(serviceSearchActions.updateHotelForm({ ...reduxState, childs: newChilds }));
    } else {
      const newChilds = reduxState.childs.slice(0, -1);
      dispatch(serviceSearchActions.updateHotelForm({ ...reduxState, childs: newChilds }));
    }
  };

  // Update child age.
  const onChildAgeChange = (newAge: number, index: number) => {
    const updatedChilds = [...reduxState.childs];
    updatedChilds[index] = newAge;
    dispatch(serviceSearchActions.updateHotelForm({ ...reduxState, childs: updatedChilds }));
  };

  return (
    <>
      <Number initValue={childs.length} min={0} max={8} title="Children" onChange={onCountChange} />

      {childs.length > 0 && (
        <div>
          <div className="row row-cols-2 g-2 mb-2">
            {childs.map((age, i) => (
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

export default HotelChildren;
