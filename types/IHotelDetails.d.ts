interface IHotelDetails {
  name: string;
  location: {
    address: string;
    mapLocation: string;
  };
  rating: number;
  totalReviews: number;
  price: {
    currency: string;
    amount: number;
  };
  images: string[];
  highlights: Highlight[];
  description: string;
  facilities: Facility[];
  rooms: Room[];
  availability: Availability;
  reviewsStatistics: ReviewStatistic[];
  surroundings: string[];
  helpfulFacts: HelpfulFact[];
}

interface Highlight {
  title: string;
  icon: string;
}

interface Facility {
  title: string;
  icon: string;
}

interface Room {
  id: number;
  roomType: string;
  guests: number;
  pricePerNight: number;
  includes: string[];
}

interface Availability {
  availableRooms: AvailableRoom[];
  totalRooms: number;
  reservedRooms: number;
}

interface AvailableRoom {
  roomImages: string[];
  roomType: string;
  beds: number;
  benefits: Benefit[];
  price: {
    amount: number;
    currency: string;
  };
  amenities: string[];
  reviews: {
    averageRating: number;
    totalReviews: number;
  };
  availability: {
    availableRooms: number;
    totalRooms: number;
    minimumNights: number;
    maximumNights: number;
  };
  additionalInfo: AdditionalInfo[];
}

interface Benefit {
  title: string;
  icon: string;
}

interface AdditionalInfo {
  title: string;
  info: string;
}

interface ReviewStatistic {
  title: string;
  rating: number;
}

interface HelpfulFact {
  title: string;
  info: string;
}
