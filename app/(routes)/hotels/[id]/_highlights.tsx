import { MdOutlineEmojiTransportation } from "react-icons/md";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { v4 } from "uuid";

type IProps = {
  highlights: Highlight[];
};

const Highlights = (props: IProps) => {
  const { highlights } = props;
  return (
    <div className="hotelHighlights hotelDetails_secion">
      <div className="row">
        <h5 className="mb-1">Property Highlights</h5>
        <div className="d-flex flex-wrap gap-4">
          {highlights.map((highlight) => (
            <div key={v4()} className="d-flex gap-2 align-items-center">
              <p className="fw-light">{highlight.title}</p>
            </div>
          ))}

          {/* <div className="d-flex gap-2 align-items-center">
            <MdOutlineEmojiTransportation className="fs-2 txtThird" />{" "}
            <p className="fw-light">Airport Transfer</p>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <PiTelevisionSimpleLight className="fs-3 txtThird" />{" "}
            <p className="fw-light">Premium TV channels</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
