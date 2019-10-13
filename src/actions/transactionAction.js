import { fetchAllTransaction, pendingProcess, errorProcess } from "./index";
import axios from "axios";
import cookies from "js-cookie";

export function fetchTransactionsAction() {
  return dispatch => {
    dispatch(pendingProcess());
    const token = cookies.get("jwt");

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/transactions`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch(fetchAllTransaction(res.data.data));
        return res.data.data;
      })
      .catch(err => {
        dispatch(errorProcess(err));
      });
  };
}
