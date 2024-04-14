type IHotelDetailsType = {
  name: string;
  images: string[];
  location: IHotelLocationType;
  description: string;
  facilities: IHotelInfoType[];
  hilights: IHotelInfoType[];
  facts: IHotelInfoType[];
  rooms: IHotelRoomType[];
  reviewsStatistics: IHotelsReviewsStatisticsType;
};

// ===================================================== //

type IHotelLocationType = {
  title: string;
  mapLocation: string;
};

type IHotelInfoType = {
  title: string;
  icon: string;
};

type IHotelRoomType = {
  title: string;
  includes: string[];
  nightPrice: number;
  guests: {
    adults: number;
    childs: number;
  };
  description: string;
  images: string[];
  rating: number;
  totalReviews: number;
};

type IHotelsReviewsStatisticsType = {
  totalReviews: number;
  categoryRatings: IHotelReviewsCategoryType[];
};

type IHotelReviewsCategoryType = {
  title: string;
  rating: number;
};
