import FormWrapper from "../common/FormWrapper";
import CarPassengersDropdown from "../common/Inputs/CarPassengers";
import DateTimeInput from "../common/Inputs/DateTimeInput";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";

const ReturnTransfer = () => {
  return (
    <FormWrapper onSubmit={() => {}}>
      <Location title="Pickup Location" placeholder="Airport, city, hotel..." onChange={() => {}} />
      <Location
        title="Drop off location"
        placeholder="Airport, city, hotel..."
        onChange={() => {}}
      />
      <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
      <DateTimeInput title="Return Date" placeholder="Enter return date" />
      <CarPassengersDropdown />
      <SubmitBtn />
    </FormWrapper>
  );
};

export default ReturnTransfer;
