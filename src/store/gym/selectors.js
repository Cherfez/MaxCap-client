export function selectGyms(reduxState) {
  // console.log("reduxState!", reduxState.gyms);
  return reduxState.gyms.all;
}

export function selectGym(reduxState) {
  // console.log("gym", reduxState.gyms.selected.gym);
  return reduxState.gyms.selected.gym;
}

export function selectGymTimeslots(reduxState) {
  // console.log("gym", reduxState.gyms.selected.gym);
  return reduxState.gyms.selected.gym.timeslots;
}

export function selectGymBookings(reduxState) {
  // console.log("gym", reduxState.gyms.selected.gym);
  return reduxState.gyms.selected.bookings;
}
