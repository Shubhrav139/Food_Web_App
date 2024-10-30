import { axiosInstance } from "../axiosInstance";

export const allRestaurants = async () => {
  try {
    const restaurants = await axiosInstance.get();

    if (restaurants.status === 200) {
      return restaurants?.data?.data;
    } else {
      return restaurants;
    }
  } catch (error) {
    throw error;
  }
};
