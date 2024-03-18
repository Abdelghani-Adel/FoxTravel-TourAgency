interface Location {
  address: string;
  mapLocation: string;
}

interface Price {
  currency: string;
  amount: number;
}

interface Highlight {
  title: string;
  icon: string;
}

interface Facility {
  title: string;
  icon: string;
}

interface Benefit {
  title: string;
  icon: string;
}

interface Review {
  averageRating: number;
  totalReviews: number;
}

interface Availability {
  availableRooms: number;
  totalRooms: number;
  minimumNights: number;
  maximumNights: number;
}

interface AdditionalInfo {
  title: string;
  info: string;
}

interface Room {
  roomImages: string[];
  roomType: string;
  beds: number;
  benefits: Benefit[];
  price: Price;
  amenities: string[];
  reviews: Review;
  availability: Availability;
  additionalInfo: AdditionalInfo[];
}

interface ReviewsStatistic {
  title: string;
  rating: number;
}

interface IHotelDetails {
  name: string;
  location: Location;
  rating: number;
  totalReviews: number;
  price: Price;
  images: string[];
  highlights: Highlight[];
  description: string;
  facilities: Facility[];
  availability: {
    availableRooms: Room[];
    totalRooms: number;
    reservedRooms: number;
  };
  reviewsStatistics: ReviewsStatistic[];
  surroundings: string[];
  helpfulFacts: AdditionalInfo[];
}
