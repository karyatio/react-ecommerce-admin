import {
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  RESET_CUSTOMERS
} from "../actions/types";

const initialState = {
  isLoading: false,
  fetchSuccess: false,
  errors: {},
  customers: []
};

const customerReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isLoading: true,
        fetchSuccess: true,
        customers: action.payload
      };
    case FETCH_CUSTOMERS_FAILURE:
      return {
        ...state,
        isLoading: true,
        fetchSuccess: false,
        errors: action.payload
      };
    case RESET_CUSTOMERS:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default customerReducers;
