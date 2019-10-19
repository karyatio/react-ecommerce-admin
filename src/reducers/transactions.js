import {
  FETCH_TRANSACTIONS,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
  RESET_TRANSACTIONS
} from "../actions/types";

const initialState = {
  isLoading: false,
  fetchSuccess: true,
  errors: {},
  transactions: []
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: true,
        transactions: action.payload
      };
    case FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: false,
        errors: action.payload
      };
    case RESET_TRANSACTIONS:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default transactionsReducer;
