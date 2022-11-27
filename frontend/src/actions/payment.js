// import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import { PAYMENT_SUCCESS } from "./types";

export const paymentSuccess = () => async (dispatch) => {
  const res = await axios.get(
    "https://troopers421.herokuapp.com/payment/is-paid"
  );
  dispatch({ type: PAYMENT_SUCCESS, payload: res.data.is_paid });
};
