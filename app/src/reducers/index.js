const initialState = {
  error: "",
  fact: "stuff",
  isFetching: false,
};

export const factReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_FACT_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCHING_FACT_SUCCESS":
      return { ...state, fact: action.payload, isFetching: false };
    default:
      return state;
  }
};
