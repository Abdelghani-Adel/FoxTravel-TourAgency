import apiClient from "./clients";

export const search = async () => {
  try {
    const response = await apiClient.post("/search");
    return response.data;
  } catch (error) {
    return error;
  }
};
