import apiClient from "./clients";

export const getBestHotels = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Hotels.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};

export const getHotels = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Hotels.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the hotels list";
  }

  return { data, error };
};

export const getHotelDetails = async (hotelId: string) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/hotelDetails.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the hotels details";
  }

  return { data, error };
};

export const searchHotels = async (req: ISearchHotel) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Hotels.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the hotels list";
  }

  return { data, error };
};
