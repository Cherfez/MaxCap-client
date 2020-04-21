export function selectGyms(reduxState) {
  // console.log("reduxState!", reduxState.gyms);
  return reduxState.gyms.all;
}

export function selectGym(reduxState) {
  // console.log("gym", reduxState.gyms.selected.gym);
  return reduxState.gyms.selected.gym;
}
