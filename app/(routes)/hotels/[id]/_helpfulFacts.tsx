import { BsInfo } from "react-icons/bs";
import { v4 } from "uuid";

type IProps = {
  facts: HelpfulFact[];
};

const HelpfulFacts = (props: IProps) => {
  const { facts } = props;

  return (
    <div>
      <h4 className="fw-normal mb-4">Some helpful facts</h4>

      <div className="row row-cols-2 row-cols-lg-4 g-3">
        {facts?.map((fact) => (
          <div key={v4()} className="col">
            <h6>
              <BsInfo /> <span className="fw-normal">{fact.title}</span> :{" "}
              <span className="fw-light">{fact.info}</span>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpfulFacts;
