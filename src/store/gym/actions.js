import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchGymsSuccess = (gyms) => ({
  type: "FETCH_GYMS_SUCCESS",
  payload: gyms,
});

export const fetchGymSuccess = (gym) => ({
  type: "FETCHED_GYM_DETAILS_SUCCESS",
  payload: gym,
});

export const fetchGyms = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/gyms`);
    // console.log("RESPONSE", response);

    dispatch(fetchGymsSuccess(response.data));
  };
};

export const fetchGymById = (gymId) => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/gyms/${gymId}/booking`);

    dispatch(fetchGymSuccess(response.data));
  };
};
