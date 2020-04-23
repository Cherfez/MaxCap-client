import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const fetchBookingsSuccess = (bookings) => ({
  type: "FETCH_BOOKINGS_SUCCESS",
  payload: bookings,
});

export const postBookingSuccess = (booking) => ({
  type: "POST_BOOKING_SUCCESS",
  payload: booking,
});

export const fetchBookings = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/bookings`);
    // console.log("RESPONSE", response);

    dispatch(fetchBookingsSuccess(response.data));
  };
};

export const postBookingThunk = (namePartner, timeslotId, gymId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const state = getState();
      const token = state.user.token;
      const response = await axios.post(
        `${apiUrl}/bookings`,
        {
          namePartner: namePartner,
          timeslotId: timeslotId,
          gymId: gymId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("RESPONSE", response.data.booking);

      dispatch(postBookingSuccess(response.data.booking));
      dispatch(showMessageWithTimeout("success", true, "Booking made!", 6000));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};
