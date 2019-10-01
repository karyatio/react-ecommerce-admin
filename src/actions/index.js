import {
  LOGGED_IN,
  ERROR,
  PENDING,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  FETCH_TRANSACTIONS,
  FETCH_CUSTOMERS
} from "./types";

export const loggedIn = isLoggedIn => {
  return {
    type: LOGGED_IN,
    payload: isLoggedIn
  };
};

export function pendingProcess() {
  return {
    type: PENDING
  };
}

export function errorProcess(error) {
  return {
    type: ERROR,
    error: error
  };
}

export function fetchAllProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products: products
  };
}

export function fetchProduct(product) {
  return {
    type: FETCH_PRODUCT,
    product: product
  };
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product: product
  };
}

export function editProduct(product) {
  return {
    type: EDIT_PRODUCT,
    product: product
  };
}

export function deleteProduct() {
  return {
    type: REMOVE_PRODUCT
  };
}

// Transactions
export function fetchAllTransaction(transactions) {
  return {
    type: FETCH_TRANSACTIONS,
    transactions: transactions
  };
}

// Customers
export function fetchAllCustomers(customers) {
  return {
    type: FETCH_CUSTOMERS,
    customers: customers
  };
}
