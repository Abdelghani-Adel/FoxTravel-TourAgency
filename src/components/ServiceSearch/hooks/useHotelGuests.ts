import { searchActions } from "@/src/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { useEffect, useState } from "react";

const useHotelGuests = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);
  const [hotelGuests, setHotelGuests] = useState(searchState.hotelGuests);

  useEffect(() => {
    dispatch(searchActions.updateHotelGuests(hotelGuests));
  }, [hotelGuests]);

  const incrementAdults = () => {
    setHotelGuests((prev) => {
      return { ...prev, adults: prev.adults + 1 };
    });
  };

  const decrementAdults = () => {
    setHotelGuests((prev) => {
      return { ...prev, adults: prev.adults - 1 };
    });
  };

  const incrementRooms = () => {
    setHotelGuests((prev) => {
      return { ...prev, rooms: prev.rooms + 1 };
    });
  };

  const decrementRooms = () => {
    setHotelGuests((prev) => {
      return { ...prev, rooms: prev.rooms - 1 };
    });
  };

  const incrementChidls = () => {
    setHotelGuests((prev) => {
      return { ...prev, childs: [...prev.childs, { age: 1 }] };
    });
  };

  const decrementChilds = () => {
    setHotelGuests((prev) => {
      return { ...prev, childs: prev.childs.slice(0, -1) };
    });
  };

  const incrementChildAge = (childIndex: number) => {
    setHotelGuests((prev) => {
      const childs = prev.childs.map((child, index) => {
        if (index === childIndex) {
          return { ...child, age: child.age + 1 };
        }
        return child;
      });

      return { ...prev, childs: childs };
    });
  };

  const decrementChildAge = (childIndex: number) => {
    setHotelGuests((prev) => {
      const childs = prev.childs.map((child, index) => {
        if (index === childIndex) {
          return { ...child, age: child.age - 1 };
        }
        return child;
      });

      return { ...prev, childs: childs };
    });
  };

  return {
    hotelGuests,
    incrementAdults,
    incrementRooms,
    decrementAdults,
    decrementRooms,
    incrementChidls,
    decrementChilds,
    incrementChildAge,
    decrementChildAge,
  };
};

export default useHotelGuests;
