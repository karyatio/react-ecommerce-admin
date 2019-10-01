import { PENDING, ERROR, FETCH_CUSTOMERS } from "../actions/types";

const initialState = {
  pending: false,
  error: null,
  customers: []
};

export default function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        pending: true
      };
    case ERROR:
      return {
        ...state,
        error: action.error
      };
    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.customers
      };
    default:
      return state;
  }
}

export const customersState = state => state.customers;
export const pendingState = state => state.pending;
export const errorState = state => state.error;
