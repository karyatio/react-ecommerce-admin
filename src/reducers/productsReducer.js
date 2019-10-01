import {
  PENDING,
  ERROR,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT
} from "../actions/types";

const intialState = {
  pending: false,
  error: null,
  products: [],
  product: {}
};

export default function productsReducer(state = intialState, action) {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        pending: true
      };

    case ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };

    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.product
      };

    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.products
      };

    case ADD_PRODUCT:
      return {
        ...state,
        pending: false,
        product: action.product
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        pending: false,
        product: action.product
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        pending: false,
        product: action.product
      };
    default:
      return state;
  }
}

export const productsState = state => state.products;
export const productState = state => state.product;
export const pendingState = state => state.pending;
export const errorState = state => state.error;
