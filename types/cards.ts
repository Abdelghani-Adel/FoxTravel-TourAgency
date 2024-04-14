type cardBadge = {
  id: number;
  badgeType: "feature" | "sale" | "specs";
  badgeTitle: string;
};

type packageCard = {
  id: number;
  image: string;
  title: string;
  description: string;
  dates: string[];
  duration: string;
  rating: number;
  totalReviews: number;
  price: number;
};

type destinationCard = {
  id: number;
  image: string;
  title: string;
  totalHotels: number;
  totalTours: number;
};

type tourCard = {
  id: number;
  image: string;
  title: string;
  address: string;
  rating: number;
  totalReviews: number;
  tourCategory: string;
  duration: string;
  badges: cardBadge[];
  price: number;
};

type hotelCard = {
  id: number;
  image: string;
  title: string;
  address: string;
  rating: number;
  totalReviews: number;
  badges: cardBadge[];
  price: number;
};
