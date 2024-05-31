import apiClient from "./clients";

export const getBestDestinations = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Destinations.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};

export const getDestinations = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Destinations.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};

export const getDestinationDetails = async (destinationId: string) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/destinationDetails.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
