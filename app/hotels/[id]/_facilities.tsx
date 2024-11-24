import { v4 } from "uuid";

type IProps = {
  facilities: Facility[];
};

const Facilities = (props: IProps) => {
  const { facilities } = props;

  return (
    <div className="hotelDetails_secion">
      <h5 className="mb-1">Most Popular Facilities</h5>

      <div className="d-flex flex-wrap gap-4">
        {facilities.map((facility) => (
          <div key={v4()} className="d-flex gap-2 align-items-center">
            <p className="fw-light">{facility.title}</p>
          </div>
        ))}

        {/* <div className="d-flex gap-2 align-items-center">
          <TbSwimming className="fs-2 txtThird" /> <p className="fw-light">Outdoor swimming pool</p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <LiaSmokingBanSolid className="fs-3 txtThird" />{" "}
          <p className="fw-light">Non-smoking rooms</p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <IoRestaurantOutline className="fs-3 txtThird" /> <p className="fw-light">Restaurants</p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <CiParking1 className="fs-3 txtThird" /> <p className="fw-light">Parking</p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <CiWifiOn className="fs-3 txtThird" /> <p className="fw-light">Free WIFI</p>
        </div> */}
      </div>
    </div>
  );
};

export default Facilities;
