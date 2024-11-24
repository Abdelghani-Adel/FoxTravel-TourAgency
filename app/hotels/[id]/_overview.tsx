import parse from "html-react-parser";

type IProps = {
  overview: string;
};

const Overview = (props: IProps) => {
  const { overview } = props;

  return (
    <div className="hotelDetails_secion" id="hotelOverview">
      <h5 className="mb-1">Overview</h5>
      <div className="fw-light mb-1">{parse(overview ? overview : "<p></p>")}</div>
    </div>
  );
};

export default Overview;
