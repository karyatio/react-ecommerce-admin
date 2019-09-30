import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  isLogged: loggedReducer,
  products: productsReducer
});
