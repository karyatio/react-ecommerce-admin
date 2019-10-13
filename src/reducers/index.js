import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import transactionsReducer from "./transactionsReducer";
import customersReducer from "./customersReducer";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  transactions: transactionsReducer,
  customers: customersReducer
});
