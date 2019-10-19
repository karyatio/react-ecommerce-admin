import {
  FETCH_TRANSACTIONS,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
  RESET_TRANSACTIONS
} from "./types";
import axios from "axios";
import cookies from "js-cookie";

/**
 * @desc Fetch All Transactions
 */
export function fetchTransactions() {
  return dispatch => {
    dispatch({
      type: FETCH_TRANSACTIONS
    });
    const token = cookies.get("jwt");

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/transactions`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch({
          type: FETCH_TRANSACTIONS_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_TRANSACTIONS_FAILURE,
          payload: err
        });
      });
  };
}

/**
 * @desc Reset Transactions
 */
export function resetTransactions() {
  return dispatch => {
    dispatch({ type: RESET_TRANSACTIONS });
  };
}
