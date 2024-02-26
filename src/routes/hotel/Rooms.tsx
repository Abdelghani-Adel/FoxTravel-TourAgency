import { useAppSelector } from "@/src/redux/store";
import React from "react";
import { v4 } from "uuid";
import { IoIosCheckmark } from "react-icons/io";

const Rooms = () => {
  const rooms = useAppSelector((state) => state.hotelDetails.rooms);

  return (
    <div id="hotelPrices">
      <table className="table roomsTable">
        <thead className="">
          <tr>
            <th scope="col">Room Type</th>
            <th scope="col">Guests</th>
            <th scope="col">Price Per Night</th>
            <th scope="col">Includes</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={v4()}>
              <td>
                <p>{room.roomType}</p>
                <button className="foxBtn mainBtn smBtn w-100">More Info</button>
              </td>
              <td>{room.guests}</td>
              <td className="fw-bold text-success fs-5">{room.pricePerNight}$</td>

              <td>
                <div className="d-flex gap-3 flex-wrap fw-light">
                  {room.includes.map((item) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
