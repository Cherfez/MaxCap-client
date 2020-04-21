export function selectGyms(reduxState) {
  // console.log("reduxState!", reduxState.gyms);
  return reduxState.gyms.all;
}

export function selectGym(reduxState) {
  return reduxState.gyms.selected;
}
