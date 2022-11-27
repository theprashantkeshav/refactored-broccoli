import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { paymentSuccess } from "../../actions/payment";

import "./payment.css";

const Payment = ({ isAuthenticated }) => {
  let history = useHistory();

  // if (!state.auth.token) {
  //   return <Redirect to="/" />;
  // }

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const load = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post(
      "https://troopers421.herokuapp.com/payment"
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_live_ldL7UirT2JMwUA", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Troppers",
      description: "",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          order_id: order_id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        };

        const result = await axios.post(
          "https://troopers421.herokuapp.com/payment/success",
          data
        );

        if (!result) {
          alert("Server error. Are you online?");
          return;
        }

        paymentSuccess();
        window.location.assign(window.location.origin);
      },
      prefill: {
        name: "Users",
        email: "users@troppers.com",
        contact: "1111111111",
      },
      notes: {
        address: "Troppers Office.",
      },
      theme: {
        color: "#05386b",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button
        className="payment-button"
        onClick={() => (isAuthenticated ? load() : history.push("/login"))}
      >
        Go Premium
      </button>
    </div>
  );
};

Payment.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Payment);
