import {
  PENDING,
  ERROR,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  RESET_PRODUCT_STORE
} from "../actions/types";

const intialState = {
  success: false,
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

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        success: true,
        pending: false
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
    case RESET_PRODUCT_STORE:
      return {
        ...state,
        pending: false,
        error: false,
        success: false,
        product: {}
      };
    default:
      return state;
  }
}
