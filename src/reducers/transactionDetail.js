import {
  FETCH_TRANSACTION_DETAIL,
  FETCH_TRANSACTION_DETAIL_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
  CHANGE_TRANSACTION_DETAIL_STATUS,
  CHANGE_TRANSACTION_DETAIL_STATUS_SUCCESS,
  CHANGE_TRANSACTION_DETAIL_STATUS_FAILURE,
  SET_RESI,
  SET_RESI_SUCCESS,
  SET_RESI_FAILURE,
  RESET_TRANSACTION_DETAIL
} from "../actions/types";

const initialState = {
  isLoading: false,
  fetchSuccess: false,
  statusSuccess: false,
  resiSuccess: false,
  transaction: {},
  errors: {}
};

function transactionDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRANSACTION_DETAIL:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_TRANSACTION_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: true,
        transaction: action.payload
      };
    case FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: false,
        errors: action.payload
      };

    case CHANGE_TRANSACTION_DETAIL_STATUS:
      return {
        ...state,
        isLoading: true
      };

    case CHANGE_TRANSACTION_DETAIL_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        statusSuccess: true
      };
    case CHANGE_TRANSACTION_DETAIL_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        statusSuccess: false,
        errors: action.payload
      };

    case SET_RESI:
      return {
        ...state,
        isLoading: true
      };
    case SET_RESI_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resiSuccess: true
      };
    case SET_RESI_FAILURE:
      return {
        ...state,
        isLoading: false,
        resiSuccess: false,
        errors: action.payload
      };

    case RESET_TRANSACTION_DETAIL:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}

export default transactionDetailReducer;
