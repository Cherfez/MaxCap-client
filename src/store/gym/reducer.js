const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GYMS_SUCCESS":
      return [...action.payload];

    default:
      return state;
  }
};
