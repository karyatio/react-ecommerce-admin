import { PENDING, ERROR, FETCH_TRANSACTIONS } from "../actions/types";

const initialState = {
  pending: false,
  error: null,
  transactions: []
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
    case FETCH_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions
      };
    default:
      return state;
  }
}

export const transactionsState = state => state.transactions;
export const pendingState = state => state.pending;
export const errorState = state => state.error;
