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

export const getPackages = async () => {};

export const getPackageDetails = async (packageId: string) => {};
