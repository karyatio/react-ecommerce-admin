import {
  FETCH_CATALOG,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  DELETE_CATALOG_ITEM,
  DELETE_CATALOG_ITEM_SUCCESS,
  DELETE_CATALOG_ITEM_FAILURE,
  RESET_CATALOG
} from "./types";
import axios from "axios";
import cookies from "js-cookie";

export function fetchCatalog() {
  return dispatch => {
    dispatch({
      type: FETCH_CATALOG
    });
    const token = cookies.get("jwt");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch({
          type: FETCH_CATALOG_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_CATALOG_FAILURE, payload: err });
      });
  };
}

export function deleteCatalogItem(id) {
  return dispatch => {
    dispatch({
      type: DELETE_CATALOG_ITEM
    });
    const token = cookies.get("jwt");
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch({
          type: DELETE_CATALOG_ITEM_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: DELETE_CATALOG_ITEM_FAILURE,
          payload: err
        });
      });
  };
}

export function resetCatalog() {
  return dispatch => {
    dispatch({ type: RESET_CATALOG });
  };
}
