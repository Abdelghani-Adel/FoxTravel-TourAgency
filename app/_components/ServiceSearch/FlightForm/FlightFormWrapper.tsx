import { useAppSelector } from "@/app/_redux/store";
import FlightForm from "./FlightForm";

const FlightFormWrapper = () => {
  const reduxFormState = useAppSelector((state) => state.serviceSearch);
  const activeCategory = reduxFormState.category;

  if (activeCategory !== "Flight") return null;

  return <FlightForm />;
};

export default FlightFormWrapper;
