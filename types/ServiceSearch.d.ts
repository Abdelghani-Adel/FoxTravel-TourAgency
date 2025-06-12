type ISearchType = "Hotel" | "Flight" | "Transport";
type IFlightType = "oneway" | "round" | "multiple";
type ITransportType = "oneway" | "round" | "excursion" | "multiple";
type ILocation = { lat: string; lon: string; name: string };

type IFlightPassengers = {
  adults: number;
  children: number;
  infants: number;
};

interface HotelSearchState {
  config: {
    minAdults: number;
    maxAdults: number;
    minRooms: number;
    maxRooms: number;
    minChilds: number;
    maxChilds: number;
  };
  city: ILocation;
  startDate: Date | null;
  endDate: Date | null;
  adults: number;
  childs: number[];
  rooms: number;
}

interface FlightSearchState {
  type: IFlightType;
  oneWay: {
    departureLocation: ILocation;
    toLocation: ILocation;
    departureDate: Date | null;
    passengers: IFlightPassengers;
  };
  round: {
    departureLocation: ILocation;
    toLocation: ILocation;
    departureDate: Date | null;
    returnDate: Date | null;
    passengers: IFlightPassengers;
  };
  multiple: {
    departureLocation: ILocation;
    toLocation: ILocation;
    departureDate: Date | null;
    passengers: IFlightPassengers;
  }[];
}

interface TransportationSearchState {
  type: ITransportType;
  oneWay: {
    pickupLocation: ILocation;
    dropoffLocation: ILocation;
    pickupDate: Date | null;
    passengers: string;
  };
  round: {
    pickupLocation: ILocation;
    dropoffLocation: ILocation;
    pickupDate: Date | null;
    returnDate: Date | null;
    passengers: string;
  };
  excursions: {
    pickupLocation: ILocation;
    pickupDate: Date | null;
    passengers: string;
    excursionType: string;
  };
  multiple: {
    pickupLocation: ILocation;
    dropoffLocation: ILocation;
    pickupDate: Date | null;
    passengers: string;
  }[];
}
