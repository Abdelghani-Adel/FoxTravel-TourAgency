type IHotelDetailsType = {
  name: string;
  images: string[];
  location: IHotelLocationType;
  description: string;
  facilities: IHotelInfoType[];
  hilights: IHotelInfoType[];
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

type IHotelRoomType = {};
