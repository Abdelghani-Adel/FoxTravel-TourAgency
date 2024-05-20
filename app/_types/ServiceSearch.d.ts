type ISearchType = "Hotel" | "Flight" | "Transport";
type IFlightType = "oneway" | "round" | "multiple";
type ITransportType = "oneway" | "round" | "excursion" | "multiple";

type IFlightPassengers = {
  adults: number;
  children: number;
  infants: number;
};

interface FlightSearchState {
  type: IFlightType;
  oneWay: {
    departureLocation: string;
    toLocation: string;
    departureDate: Date | null;
    passengers: IFlightPassengers;
  };
  round: {
    departureLocation: string;
    toLocation: string;
    departureDate: Date | null;
    returnDate: Date | null;
    passengers: IFlightPassengers;
  };
  multiple: {
    departureLocation: string;
    toLocation: string;
    departureDate: Date | null;
    passengers: IFlightPassengers;
  }[];
}

interface TransportationSearchState {
  type: ITransportType;
  oneWay: {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: Date | null;
    passengers: number;
  };
  round: {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: Date | null;
    returnDate: Date | null;
    passengers: number;
  };
  excursions: {
    pickupLocation: string;
    pickupDate: Date | null;
    passengers: number;
    excursionType: string;
  };
  multiple: {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: Date | null;
    passengers: number;
  }[];
}
