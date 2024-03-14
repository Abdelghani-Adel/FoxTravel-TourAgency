// ================================================================= //
// Search Form START
// ================================================================= //
type IServiceSearchCategory = "Hotel" | "Flight" | "Transport";

type ISearchFormState = {
  category: IServiceSearchCategory;
  hotel: ISearchHotelState;
  flight: ISearchFlightState;
  transport: ISearchTransportState;
  carRental: {};
  package: {};
};

// CommonTypes
type ISearchLocation = {
  location: string;
  locationType: "city" | "airport" | "hotel" | "other";
};

// HotelSearch
type ISearchHotelState = {
  city: string;
  startDate: Date | null;
  endDate: Date | null;
  adults: number;
  childs: number[];
  rooms: number;
};

// FlightSearch
type ISearchFlightState = {
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
  passengers: ISearchFlightPassengers;
};

type ISearchFlightPassengers = {
  adults: number;
  children: number;
  infants: number;
};

// TransportSearch
type ISearchTransportState = {
  oneway: {
    pickupLocation: ISearchLocation;
    dropoffLocation: ISearchLocation;
    pickupDate: Date | null;
    pickupTime: Date | null;
    passengers: number;
  };
  round: {
    pickupLocation: ISearchLocation;
    dropoffLocation: ISearchLocation;
    pickupDate: Date | null;
    pickupTime: Date | null;
    returnDate: Date | null;
    returnTime: Date | null;
    passengers: number;
  };
  multiple: {
    pickupLocation: ISearchLocation;
    dropoffLocation: ISearchLocation;
    pickupDate: Date | null;
    pickupTime: Date | null;
    passengers: number;
  }[];
  excursion: {
    pickupLocation: ISearchLocation;
    pickupDate: Date | null;
    pickupTime: Date | null;
    passengers: number;
    excursionType: string;
  };
};
// ================================================================= //
// Search Form END
// ================================================================= //
