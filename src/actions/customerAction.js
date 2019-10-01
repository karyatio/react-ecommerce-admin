import { fetchAllCustomers, pendingProcess, errorProcess } from "./index";
import cookies from "js-cookie";
import axios from "axios";

export function fetchCustomerAction() {
  return dispatch => {
    const token = cookies.get("jwt");
    dispatch(pendingProcess());
    axios
      .get("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch(fetchAllCustomers(res.data.data));
        return res.data.data;
      })
      .catch(err => {
        dispatch(errorProcess(err));
      });
  };
}
