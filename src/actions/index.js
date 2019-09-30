import axios from "axios";
import {
  LOGGED_IN,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS
} from "./action-types";

export const loggedIn = isLoggedIn => {
  return {
    type: LOGGED_IN,
    payload: isLoggedIn
  };
};

export function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products
  };
}

export function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error
  };
}
