
export function selectBookingSuccess(reduxState) {
  console.log("reduxState!", reduxState.bookings[0].bookingRedirect);
  return reduxState.bookings[0].bookingRedirect;
}

// export function selectBookings(reduxState) {
//   // console.log("reduxState!", reduxState.bookings);
//   return reduxState.bookings;
// }

