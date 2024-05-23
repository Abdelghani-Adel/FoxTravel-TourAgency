import apiClient from "./clients";

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
