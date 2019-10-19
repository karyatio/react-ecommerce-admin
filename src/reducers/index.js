import { combineReducers } from "redux";
import authReducer from "./auth";
import catalogReducer from "./catalog";
import productsReducer from "./products";
import transactionsReducer from "./transactions";
import customersReducer from "./customers";

export default combineReducers({
  auth: authReducer,
  catalog: catalogReducer,
  products: productsReducer,
  transactions: transactionsReducer,
  customers: customersReducer
});
