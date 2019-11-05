import {
  FETCH_CATALOG,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  DELETE_CATALOG_ITEM,
  DELETE_CATALOG_ITEM_SUCCESS,
  DELETE_CATALOG_ITEM_FAILURE,
  RESET_CATALOG
} from "../actions/types";

const initialState = {
  isLoading: false,
  fetchSuccess: false,
  products: [],
  deleteSuccess: false,
  errors: null
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: true,
        products: action.payload
      };
    case FETCH_CATALOG_FAILURE:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: false,
        errors: action.payload
      };
    case DELETE_CATALOG_ITEM:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_CATALOG_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: true
      };
    case DELETE_CATALOG_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: false,
        errors: action.payload
      };
    case RESET_CATALOG:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
export default catalogReducer;
