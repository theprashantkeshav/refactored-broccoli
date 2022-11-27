import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  // LOGOUT,
  LOGOUT2,
  // PAYMENT_SUCCESS,
} from "../actions/types";
import setAuthToken from "../utils/setAuthToken";

//? LOAD USERS

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  console.log("Token:", token);

  if (token) {
    setAuthToken(token);
  } else {
    dispatch({ type: AUTH_ERROR });
    return;
  }

  try {
    const res = await axios.get("https://troopers421.herokuapp.com/users");
    if (!res.data) {
      throw new Error("No user details!");
    }
    dispatch({ type: USER_LOADED, payload: res.data });

    // const resPay = await axios.get('http://localhost:5000/payment/is-paid');
    // dispatch({ type: PAYMENT_SUCCESS, payload: resPay.data.is_paid });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

//? REGISTER USERS
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(
        "https://troopers421.herokuapp.com/register",
        body,
        config
      );

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      dispatch(loadUser());
    } catch (error) {
      dispatch({ type: REGISTER_FAIL });
    }
  };

//? LOGIN USERS
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: { "Content-type": "application/json" },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "https://troopers421.herokuapp.com/login",
      body,
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

export const setToken = (token) => async (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: { token: token } });
};

//? LOGOUT / CLEAR PROFILE

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT2 });
};
