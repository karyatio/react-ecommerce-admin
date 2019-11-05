import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_CATALOG_FAILURE,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  RESET_PRODUCT
} from "./types";
import axios from "axios";
import cookies from "js-cookie";

export function fetchProduct(id) {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCT });
    const token = cookies.get("jwt");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_CATALOG_FAILURE, payload: err });
      });
  };
}

export function addProduct(data) {
  return dispatch => {
    dispatch({ type: ADD_PRODUCT });
    const token = cookies.get("jwt");
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/products`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: ADD_PRODUCT_FAILURE, payload: err });
      });
  };
}

export function editProduct(id, data) {
  return dispatch => {
    dispatch({ type: EDIT_PRODUCT });
    const token = cookies.get("jwt");
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/products/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: EDIT_PRODUCT_FAILURE, payload: err });
      });
  };
}

export function resetProduct() {
  return dispatch => {
    dispatch({ type: RESET_PRODUCT });
  };
}
