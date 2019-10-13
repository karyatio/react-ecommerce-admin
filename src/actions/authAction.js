import { LOGGED_IN } from "./types";
import axios from "axios";
import cookie from "js-cookie";

export function loginAction(data) {
  return dispatch => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/admin/login`, data)
      .then(result => {
        cookie.set("jwt", result.data.access_token);

        dispatch(loggedIn(true));
      })
      .catch(err => {
        dispatch(loggedIn(false));
      });
  };
}

export function logoutAction() {
  return dispatch => {
    cookie.remove("jwt");

    dispatch(loggedIn(false));
  };
}

const loggedIn = isLoggedIn => {
  return {
    type: LOGGED_IN,
    payload: isLoggedIn
  };
};
