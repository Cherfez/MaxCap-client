import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchGymsSuccess = (gyms) => ({
  type: "FETCH_GYMS_SUCCESS",
  payload: gyms,
});

export const fetchGyms = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/gyms`);
    // console.log("RESPONSE", response);

    dispatch(fetchGymsSuccess(response.data));
  };
};
