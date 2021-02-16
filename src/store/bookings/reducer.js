const initialState = {
  all: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKINGS_SUCCESS":
      return {
        ...state,
        all: action.payload,
      };

    // case "FETCH_ALL_BOOKINGS_SUCCESS":
    //   return [...state, action.payload];

    case "DELETEBOOKING_SUCCESS":
      return {
        ...state,
        all: state.all.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};
