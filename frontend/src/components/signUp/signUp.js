import React, { Fragment, useState } from "react";
import Navbar from "../navbar/navbar";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

import PropTypes from "prop-types";

import "./signUp.css";

const SignUp = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [visibility, setVisibility] = useState(false);

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  const togglePassword = () => {
    setVisibility(!visibility);
  };

  //? REDIRECT IF SINGED UP
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className="form">
        <p className="title">Sign Up</p>
        <form onSubmit={(e) => onSubmit(e)} method="post">
          <input
            onChange={(e) => onChange(e)}
            value={name}
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <br />

          <input
            onChange={(e) => onChange(e)}
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />

          <div className="pwd">
            <input
              onChange={(e) => onChange(e)}
              value={password}
              type={visibility ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              minLength="6"
            />

            {visibility ? (
              <span className="toggle-icon" onClick={togglePassword}>
                <i class="fas fa-eye"></i>
              </span>
            ) : (
              <span className="toggle-icon">
                <i class="fas fa-eye-slash" onClick={togglePassword}></i>
              </span>
            )}
          </div>

          <br />
          <input className="btn" type="submit" value="Sign Up" />
        </form>
        <p className="have-account">
          Already have an account?{" "}
          <span>
            <Link
              style={{
                textDecoration: "none",
                fontFamily: "Rock salt cursive",
              }}
              to="/login"
            >
              Login
            </Link>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(SignUp);
