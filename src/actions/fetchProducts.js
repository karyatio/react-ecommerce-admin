import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from "./index";

function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchProductsSuccess(res.data));
        return res.products;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
