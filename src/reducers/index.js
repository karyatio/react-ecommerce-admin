import { combineReducers } from "redux";
import authReducer from "./auth";
import catalogReducer from "./catalog";
import productReducer from "./product";
import transactionsReducer from "./transactions";
import customersReducer from "./customers";

export default combineReducers({
  auth: authReducer,
  catalog: catalogReducer,
  product: productReducer,
  transactions: transactionsReducer,
  customers: customersReducer
});
