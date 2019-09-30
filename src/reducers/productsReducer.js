import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS
} from "../actions/action-types";

const initialState = {
  pending: false,
  products: [],
  error: null
};

export default function productsReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.products
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;
