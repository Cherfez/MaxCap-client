const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKINGS_SUCCESS":
      return action.payload;

    // case "FETCH_ALL_BOOKINGS_SUCCESS":
    //   return [...state, action.payload];

    default:
      return state;
  }
};
