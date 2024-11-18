interface ITourDetails {
  serviceId: number;
  images: string[];
  title: string;
  location: string;
  rating: number;
  price: number;
  currency: string;
  totalReviews: number;
  snapshot: Snapshot;
  overview: string;
  information: Information[];
  inclusions: informations2[];
  recommendation: string;
}

interface informations2 {
  title: string;
  details: string[];
}

interface Snapshot {
  duration: string;
  groupSize: number;
}

interface Information {
  title: string;
  details: string;
}

// interface Itinerary {
//   title: string;
//   duration: string;
//   description: string;
//   images: string[];
// }
