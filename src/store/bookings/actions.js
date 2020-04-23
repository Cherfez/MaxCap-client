import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchBookingsSuccess = (bookings) => ({
  type: "FETCH_BOOKINGS_SUCCESS",
  payload: bookings,
});

export const fetchBookings = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/bookings`);
    console.log("RESPONSE", response);

    dispatch(fetchBookingsSuccess(response.data));
  };
};
