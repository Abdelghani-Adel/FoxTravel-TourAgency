import { useAppSelector } from "@/src/redux/store";
import React from "react";
import { v4 } from "uuid";
import { IoIosCheckmark } from "react-icons/io";
import HotelRoomInfo from "./HotelRoomInfo";

const HotelRoomsTable = () => {
  const rooms = useAppSelector((state) => state.hotelDetails.rooms);

  return (
    <div id="hotelPrices">
      <table className="table roomsTable">
        <TableHeader />
        <tbody>
          {rooms.map((room) => (
            <TableRow key={v4()} room={room} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Room Type</th>
        <th scope="col">Guests</th>
        <th scope="col">Price Per Night</th>
        <th scope="col">Includes</th>
        <th scope="col"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ room }: { room: any }) => {
  return (
    <tr>
      <td>
        <p>{room.roomType}</p>
        <HotelRoomInfo room={room} />
      </td>
      <td>{room.guests}</td>
      <td className="fw-bold text-success fs-5">{room.pricePerNight}$</td>

      <td>
        <div className="d-flex gap-3 flex-wrap fw-light">
          {room.includes?.map((item: any) => (
            <span key={v4()}>
              <IoIosCheckmark /> {item}
            </span>
          ))}
        </div>
      </td>

      <td>
        <button className="foxBtn thirdBtn">Reserve</button>
      </td>
    </tr>
  );
};

export default HotelRoomsTable;
