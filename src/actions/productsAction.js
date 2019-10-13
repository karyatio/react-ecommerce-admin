import {
  pendingProcess,
  fetchAllProducts,
  errorProcess,
  addProduct,
  fetchProduct,
  addProductSuccess,
  resetProductStore
} from "./index";

import axios from "axios";

export function fetchProductsAction() {
  return dispatch => {
    dispatch(pendingProcess());
    fetch(`${process.env.REACT_APP_API_URL}/api/products`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchAllProducts(res.data));

        return res.data;
      })
      .catch(error => {
        dispatch(errorProcess(error));
      });
  };
}

export function fetchProductAction(productId) {
  return dispatch => {
    dispatch(pendingProcess());
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products/${productId}`)
      .then(res => {
        dispatch(fetchProduct(res.data.data));
        return res.data.data;
      })
      .catch(err => {
        dispatch(errorProcess(err));
      });
  };
}

export function addProductAction(formData) {
  return dispatch => {
    dispatch(pendingProcess());
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/products`, formData, {
        headers: { "content-type": "multipart/form-data" }
      })
      .then(res => {
        dispatch(addProduct(res.data.data));
        dispatch(addProductSuccess());
        return res.data.data;
      })
      .catch(err => {
        dispatch(errorProcess(err));
      });
  };
}

export function resetProductAction() {
  return dispatch => {
    dispatch(resetProductStore());
    return;
  };
}
