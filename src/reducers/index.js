import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";

export default combineReducers({
  isLogged: loggedReducer
});
