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
  deletedProduct: null,
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
        isLoading: true,
        deleteSuccess: false,
        deletedProduct: null
      };
    case DELETE_CATALOG_ITEM_SUCCESS:
      const deletedProductId = action.payload._id;
      var products = state.products.filter(product => {
        if (product._id !== deletedProductId) return product;
        return null;
      });

      return {
        ...state,
        products: products,
        isLoading: false,
        deleteSuccess: true,
        deletedProduct: action.payload
      };
    case DELETE_CATALOG_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: false,
        errors: action.payload,
        deletedProduct: null
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
