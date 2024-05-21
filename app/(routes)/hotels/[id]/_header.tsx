import { CiLocationOn } from "react-icons/ci";

type IProps = {
  name: string;
  location: {
    address: string;
    mapLocation: string;
  };
};

const Header = (props: IProps) => {
  const { name, location } = props;

  return (
    <div className="row justify-content-between g-3 mb-3">
      <div className="col-12 col-md-8">
        <h2 className="mb-1 fw-bolder">{name}</h2>
        <p>
          <span className="textGray fw-light me-3">
            <CiLocationOn className="me-1" />
            {location.address}
          </span>
          <a href="/">Show on map</a>
        </p>
      </div>

      <div className="col-12 col-md-4">
        <div className="d-flex flex-column flex-lg-row justify-content-end align-items-lg-center gap-3">
          <button className="foxBtn mainBtn">
            <a href="#hotelPrices">Select Room</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
