import {
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE
} from "./types";
import cookies from "js-cookie";
import axios from "axios";

/**
 * @desc Fetch All Customer Data
 */
export function fetchCustomer() {
  return dispatch => {
    const token = cookies.get("jwt");
    dispatch({
      type: FETCH_CUSTOMERS
    });
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch({
          type: FETCH_CUSTOMERS_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_CUSTOMERS_FAILURE,
          payload: err
        });
      });
  };
}
