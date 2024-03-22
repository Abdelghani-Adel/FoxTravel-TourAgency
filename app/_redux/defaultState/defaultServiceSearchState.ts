const defaultServiceSearchState: ISearchFormState = {
  category: "Hotel",
  hotel: {
    city: "",
    startDate: null,
    endDate: null,
    adults: 0,
    childs: [],
    rooms: 0,
  },
  flight: {
    flightType: "oneway",
    oneway: {
      from: {
        location: "",
        locationType: "hotel",
      },
      to: {
        location: "",
        locationType: "hotel",
      },
      departureDate: null,
    },
    round: {
      from: {
        location: "",
        locationType: "hotel",
      },
      to: {
        location: "",
        locationType: "hotel",
      },
      departureDate: null,
      returnDate: null,
    },
    multiple: [
      {
        from: {
          location: "",
          locationType: "hotel",
        },
        to: {
          location: "",
          locationType: "hotel",
        },
        departureDate: null,
        passengers: {
          adults: 0,
          children: 0,
          infants: 0,
        },
      },
    ],
    passengers: {
      adults: 0,
      children: 0,
      infants: 0,
    },
  },
  transport: {
    transferType: "oneway",
    passengers: 0,
    oneway: {
      pickupLocation: {
        location: "",
        locationType: "hotel",
      },
      dropoffLocation: {
        location: "",
        locationType: "hotel",
      },
      pickupDate: null,
    },
    round: {
      pickupLocation: {
        location: "",
        locationType: "hotel",
      },
      dropoffLocation: {
        location: "",
        locationType: "hotel",
      },
      pickupDate: null,
      returnDate: null,
    },
    multiple: [
      {
        pickupLocation: {
          location: "",
          locationType: "hotel",
        },
        dropoffLocation: {
          location: "",
          locationType: "hotel",
        },
        pickupDate: null,
        passengers: 0,
      },
    ],
    excursion: {
      pickupLocation: {
        location: "",
        locationType: "hotel",
      },
      pickupDate: null,
      excursionType: "",
    },
  },
  carRental: {},
  package: {},
};

export default defaultServiceSearchState;
