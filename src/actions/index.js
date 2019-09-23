import { LOGGED_IN } from "./action-types";
export const loggedIn = isLoggedIn => {
  return {
    type: LOGGED_IN,
    payload: isLoggedIn
  };
};
