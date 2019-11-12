import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./types";
import axios from "axios";
import cookie from "js-cookie";

export function login(data) {
  return dispatch => {
    dispatch({ type: LOGIN });
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/admin/login`, data)
      .then(res => {
        cookie.set("jwt", res.data.access_token);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.access_token
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: err
        });
      });
  };
}

export function logout() {
  return dispatch => {
    cookie.remove("jwt");

    dispatch({
      type: LOGOUT
    });
  };
}
