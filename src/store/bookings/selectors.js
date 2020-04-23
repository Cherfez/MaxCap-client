export function selectTimeslots(reduxState) {
  console.log("reduxState!", reduxState.bookings);
  return reduxState.bookings;
}
