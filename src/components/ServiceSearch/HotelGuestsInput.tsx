import HotelGuestsAdults from "./HotelGuestsAdults";
import HotelGuestsChilds from "./HotelGuestsChilds";
import HotelGuestsRooms from "./HotelGuestsRooms";
import HotelGuestsSummary from "./HotelGuestsSummary";
import useHotelGuests from "./hooks/useHotelGuests";

const HotelGuestsInput = () => {
  const {
    hotelGuests,
    incrementAdults,
    incrementRooms,
    decrementAdults,
    decrementRooms,
    incrementChidls,
    decrementChilds,
    incrementChildAge,
    decrementChildAge,
  } = useHotelGuests();

  return (
    <div className="guestInput serviceSearch_inputController">
      <h5 className="searchService_inputTitle">Guests</h5>
      <div className="dropdown">
        <HotelGuestsSummary
          rooms={hotelGuests.rooms}
          adults={hotelGuests.adults}
          childs={hotelGuests.childs.length}
        />

        <div className="dropdown-menu serviceSearch_inputDropdown">
          <div className="dropdown_inner">
            <HotelGuestsRooms
              rooms={hotelGuests.rooms}
              incrementRooms={incrementRooms}
              decrementRooms={decrementRooms}
            />
            <HotelGuestsAdults
              adults={hotelGuests.adults}
              incrementAdults={incrementAdults}
              decrementAdults={decrementAdults}
            />
            <HotelGuestsChilds
              childs={hotelGuests.childs}
              incrementChidls={incrementChidls}
              decrementChilds={decrementChilds}
              incrementChildAge={incrementChildAge}
              decrementChildAge={decrementChildAge}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelGuestsInput;
