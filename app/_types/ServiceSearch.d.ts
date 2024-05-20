type ISearchType = "Hotel" | "Flight" | "Transport";

// ======================================================================================================== //

type ISearchFormState = {
  category: IServiceSearchCategory;
  hotel: ISearchHotelState;
  flight: ISearchFlightState;
  transport: ISearchTransportState;
  carRental: {};
  package: {};
};

type ISearchLocation = {
  location: string;
  locationType: "city" | "airport" | "hotel" | "other";
};

type IServiceSearchCategory = "Hotel" | "Flight" | "Transport";
type ISSFlightType = "oneway" | "round" | "multiple";
type ISSTransferType = "oneway" | "round" | "multiple" | "excursion";

// ========================== HOTEL ========================== //
type ISearchHotelState = {
  city: string;
  startDate: Date | null;
  endDate: Date | null;
  adults: number;
  childs: number[];
  rooms: number;
};

// ========================== FLIGHT ========================== //
type ISearchFlightState = {
  flightType: ISSFlightType;
  passengers: ISearchFlightPassengers;
  oneway: {
    from: ISearchLocation;
    to: ISearchLocation;
    departureDate: Date | null;
  };
  round: {
    from: ISearchLocation;
    to: ISearchLocation;
    departureDate: Date | null;
    returnDate: Date | null;
  };
  multiple: {
    from: ISearchLocation;
    to: ISearchLocation;
    departureDate: Date | null;
    passengers: ISearchFlightPassengers;
  }[];
};

type ISearchFlightPassengers = {
  adults: number;
  children: number;
  infants: number;
};

// ========================== TRANSFER ========================== //
type ISearchTransportState = {
  transferType: ISSTransferType;
  passengers: number;
  oneway: {
    pickupLocation: ISearchLocation;
    dropoffLocation: ISearchLocation;
    pickupDate: Date | null;
  };
  round: {
    pickupLocation: ISearchLocation;
    dropoffLocation: ISearchLocation;
    pickupDate: Date | null;
    returnDate: Date | null;
  };
  multiple: {
    pickupLocation: ISearchLocation;
    dropoffLocation: ISearchLocation;
    pickupDate: Date | null;
    passengers: number;
  }[];
  excursion: {
    pickupLocation: ISearchLocation;
    pickupDate: Date | null;
    excursionType: string;
  };
};

// ========================================================================================================================== //

interface IPassengers {
  adults: number;
  children: number;
  infants: number;
}

interface FlightSearchState {
  type: ISSFlightType;
  oneWay: {
    departureLocation: string;
    toLocation: string;
    departureDate: Date | null;
    passengers: IPassengers;
  };
  round: {
    departureLocation: string;
    toLocation: string;
    departureDate: Date | null;
    returnDate: Date | null;
    passengers: IPassengers;
  };
  multiple: {
    departureLocation: string;
    toLocation: string;
    departureDate: Date | null;
    passengers: IPassengers;
  }[];
}

type ITransportType = "oneway" | "round" | "excursion" | "multiple";

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
