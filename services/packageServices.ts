import apiClient from "./clients";

export const getBestPackages = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Packages.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};

export const getPackages = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/Cards_Packages.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};

export const getPackageDetails = async (packageId: string) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/packageDetails.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
