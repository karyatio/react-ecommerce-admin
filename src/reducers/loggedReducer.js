import { LOGGED_IN } from "../actions/action-types";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};

export default loggedReducer;
