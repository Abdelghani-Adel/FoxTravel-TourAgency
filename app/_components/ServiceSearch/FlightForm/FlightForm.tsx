import { useAppSelector } from "@/app/_redux/store";
import FlightTypeSelectors from "./FlightTypeSelectors";
import OneWayFlight from "./OneWayFlight";
import RoundFlight from "./RoundFlight";

const FlightForm = () => {
  const reduxState = useAppSelector((state) => state.serviceSearch.flight);
  const flightType = reduxState.flightType;

  return (
    <div>
      <FlightTypeSelectors />
      {flightType === "oneway" && <OneWayFlight />}
      {flightType === "round" && <RoundFlight />}
    </div>
  );
};

export default FlightForm;
