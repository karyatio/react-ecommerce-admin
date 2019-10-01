import {
  pendingProcess,
  fetchAllProducts,
  errorProcess,
  addProduct,
  fetchProduct
} from "./index";

import axios from "axios";

export function fetchProductsAction() {
  return dispatch => {
    dispatch(pendingProcess());
    fetch("http://localhost:5000/api/products")
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
      .get(`http://localhost:5000/api/products/${productId}`)
      .then(res => {
        dispatch(fetchProduct(res.data.data));
        return res.data.data;
      })
      .catch(err => {
        dispatch(errorProcess(err));
      });
  };
}

export function addProductAction(product) {
  return dispatch => {
    dispatch(pendingProcess());
    axios
      .post("http://localhost:5000/api/products", product)
      .then(res => {
        dispatch(addProduct(res.data.data));
        return res.data.data;
      })
      .catch(err => {
        dispatch(errorProcess(err));
      });
  };
}
