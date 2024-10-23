import apiClient from "./clients";

export const getCardsList = async () => {
  let data = null;
  let error = null;

  try {
    const formData = new FormData();
    formData.append("languageCode", "en");

    const response = await apiClient.post(
      "https://fox.devsdiamond.com/api/Tours/GetTourCard",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

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
