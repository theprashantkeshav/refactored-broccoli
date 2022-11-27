import { PAYMENT_SUCCESS } from "../actions/types";

const initialState = {
  isPaid: false,
};

export default function payment(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PAYMENT_SUCCESS: {
      return { ...state, isPaid: payload };
    }

    default: {
      return state;
    }
  }
}
