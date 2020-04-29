const initialState = [{ bookingRedirect: false }];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKINGS_SUCCESS":
      return action.payload;

    case "POST_BOOKING_SUCCESS":
      return [{ bookingRedirect: true }];

    default:
      return state;
  }
};
