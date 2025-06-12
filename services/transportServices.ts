import apiClient from "./clients";

export const getStartDate = async () => {
  let data = null;
  let error = null;

  try {
    const formData = new FormData();
    formData.append("languageCode", "en");

    const response = await apiClient.post("https://fox.devsdiamond.com/api/Transport/getSearchReleaseDate", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    data = response.data.ReleaseDate;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};

export const searchTransOneWay = async (req: ISearchTransportOneway) => {};

export const searchTransRound = async (req: ISearchTransportRound) => {};

export const searchTransMultiple = async (req: ISearchTransportMultiple) => {};

export const searchTransExcursion = async (req: ISearchTransportExcursion) => {};
