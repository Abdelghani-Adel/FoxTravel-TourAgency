import { useState } from "react";

const initialRequestBody: IServiceSearchReqBody = {
  category: "Hotel",
  startDate: new Date(),
  endDate: new Date(),
  hotelGuests: {
    rooms: 1,
    adults: 1,
    childs: [],
  },
  city: "Hurghada",
  carRiders: 4,
  carModel: "Cherry Arizo",
  activityType: "",
};

const useRequestBody = () => {
  const [requestBody, setRequestBody] = useState<IServiceSearchReqBody>(initialRequestBody);

  const updateRequestBody = <K extends keyof IServiceSearchReqBody>(
    key: K,
    value: IServiceSearchReqBody[K]
  ) => {
    setRequestBody((prev) => ({ ...prev, [key]: value }));
  };

  return { requestBody, updateRequestBody };
};

export default useRequestBody;
