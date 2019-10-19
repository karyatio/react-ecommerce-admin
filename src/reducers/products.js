import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  RESET_PRODUCT
} from "../actions/types";

const initialState = {
  isLoading: false,
  errors: {},
  fetchSuccess: false,
  addSuccess: false,
  editSuccess: false,
  product: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: true,
        product: action.payload
      };

    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: false,
        errors: action.payload
      };

    case ADD_PRODUCT:
      return {
        ...state,
        isLoading: true
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addSuccess: true,
        product: action.payload
      };

    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        addSuccess: false,
        errors: action.payload
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        editSuccess: true,
        product: action.payload
      };

    case EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        editSuccess: false,
        errors: action.payload
      };

    case RESET_PRODUCT:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default productReducer;
