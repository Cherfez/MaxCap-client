const initialState = {
  all: [],
  selected: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GYMS_SUCCESS":
      return {
        ...state,
        all: [...action.payload],
      };

    case "FETCHED_GYM_DETAILS_SUCCESS":
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
};
