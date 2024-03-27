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
  reviewsQuantity: number;
  price: number;
};

type destinationCard = {
  id: number;
  image: string;
  title: string;
  hotelsQuantity: number;
  toursQuantity: number;
};

type tourCard = {
  id: number;
  image: string;
  title: string;
  address: string;
  rating: number;
  reviewsQuantity: number;
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
  reviewsQuantity: number;
  badges: cardBadge[];
  price: number;
};
