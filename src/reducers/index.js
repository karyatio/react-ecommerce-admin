import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";
import productsReducer from "./productsReducer";
import transactionsReducer from "./transactionsReducer";
import customersReducer from "./customersReducer";

export default combineReducers({
  isLogged: loggedReducer,
  products: productsReducer,
  transactions: transactionsReducer,
  customers: customersReducer
});
