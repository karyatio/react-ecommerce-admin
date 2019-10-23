import {
  FETCH_TRANSACTION_DETAIL,
  FETCH_TRANSACTION_DETAIL_SUCCESS,
  FETCH_TRANSACTION_DETAIL_FAILURE,
  CHANGE_TRANSACTION_DETAIL_STATUS,
  CHANGE_TRANSACTION_DETAIL_STATUS_SUCCESS,
  CHANGE_TRANSACTION_DETAIL_STATUS_FAILURE,
  SET_RESI,
  SET_RESI_SUCCESS,
  SET_RESI_FAILURE,
  RESET_TRANSACTION_DETAIL
} from "./types";
import axios from "axios";
import cookies from "js-cookie";

export function fetchTransaction(id) {
  return dispatch => {
    dispatch({ type: FETCH_TRANSACTION_DETAIL });
    const token = cookies.get("jwt");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/transactions/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      .then(res => {
        dispatch({
          type: FETCH_TRANSACTION_DETAIL_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_TRANSACTION_DETAIL_FAILURE, payload: err });
      });
  };
}

export function changeTransactionStatus(id, status) {
  return dispatch => {
    dispatch({ type: CHANGE_TRANSACTION_DETAIL_STATUS });
    const token = cookies.get("jwt");
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/transactions/${id}/status`,
        {
          status
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(res => {
        dispatch({
          type: CHANGE_TRANSACTION_DETAIL_STATUS_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: CHANGE_TRANSACTION_DETAIL_STATUS_FAILURE,
          payload: err
        });
      });
  };
}

export function setResi(id, number) {
  return dispatch => {
    dispatch({ type: SET_RESI });

    const token = cookies.get("jwt");
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/transactions/${id}/resi`,
        {
          number
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(res => {
        dispatch({
          type: SET_RESI_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: SET_RESI_FAILURE,
          payload: err
        });
      });
  };
}

export function resetTransaction() {
  return dispatch => {
    dispatch({ type: RESET_TRANSACTION_DETAIL });
  };
}
