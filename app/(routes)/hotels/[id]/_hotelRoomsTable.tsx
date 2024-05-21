import { BsPersonStanding } from "react-icons/bs";
import { GiPerson } from "react-icons/gi";
import { IoIosCheckmark } from "react-icons/io";
import { v4 } from "uuid";
import HotelRoomInfo from "./_hotelRoomInfo";

type IProps = {
  rooms: Room[];
};

const HotelRoomsTable = (props: IProps) => {
  const { rooms } = props;

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
      <td>
        <div className="d-flex align-items-center justify-content-between">
          <BsPersonStanding className="textPrimary fs-4" />{" "}
          <BsPersonStanding className="textPrimary fs-4" /> |
          <GiPerson className="textSecondary" />
        </div>
      </td>
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
        <button className="foxBtn secondBtn">Reserve</button>
      </td>
    </tr>
  );
};

export default HotelRoomsTable;
