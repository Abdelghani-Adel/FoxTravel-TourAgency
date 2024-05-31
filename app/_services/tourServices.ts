import apiClient from "./clients";

export const getBestTours = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Tours.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};

export const getTours = async () => {};

export const getTourDetails = async (tourId: string) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Details_tour.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
