import apiClient from "./clients";

export const searchHotels = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Packages.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the hotels list";
  }

  return { data, error };
};

export const searchTransfers = async () => {
  try {
    const response = await apiClient.get("/data/Cards_Hotels.json");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const searchFlights = async () => {
  try {
    const response = await apiClient.get("/data/Cards_Hotels.json");
    return response.data;
  } catch (error) {
    return error;
  }
};
