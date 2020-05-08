import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
import { selectToken } from "../user/selectors";

export const fetchBookingsSuccess = (bookings) => ({
  type: "FETCH_BOOKINGS_SUCCESS",
  payload: bookings,
});

// export const fetchAllBookingsSuccess = (allBookings) => ({
//   type: "FETCH_ALL_BOOKINGS_SUCCESS",
//   payload: allBookings,
// });

export const postBookingSuccess = (booking) => ({
  type: "POST_BOOKING_SUCCESS",
  payload: booking,
});

export const deleteBookingSuccess = (bookingId) => ({
  type: "DELETEBOOKING_SUCCESS",
  payload: bookingId,
});

export const fetchBookings = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/bookings/${userId}`);
      console.log("RESPONSE", response);

      dispatch(fetchBookingsSuccess(response.data));
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

// export const fetchAllBookings = () => {
//   return async (dispatch) => {
//     const response = await axios.get(`${apiUrl}/bookings/all`);
//     // console.log("RESPONSE", response);

//     dispatch(fetchAllBookingsSuccess(response.data));
//   };
// };

export const postBookingThunk = (
  namePartner,
  timeslotId,
  gymId,
  pickedDate,
  history
) => {
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
          pickedDate: pickedDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("RESPONSE", response.data.booking);

      dispatch(postBookingSuccess(response.data.booking));
      history.push(`/gyms/${gymId}/booking/${response.data.booking.id}`);
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

export const deleteBooking = (bookingId) => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;
    dispatch(appLoading());

    try {
      const response = await axios.delete(`${apiUrl}/bookings/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("res", bookingId);
      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      dispatch(deleteBookingSuccess(bookingId));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};
