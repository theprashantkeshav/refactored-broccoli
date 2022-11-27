import React, { Fragment } from "react";
import Navbar from "../navbar/navbar";
import GoogleButton from "react-google-button";

import "./logIn.css";

//?REDUX
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

const LogIn = ({ isAuthenticated }) => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [visibility, setVisibility] = useState(false);

  // const { email, password } = formData;

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   login(email, password);
  // };

  // const togglePassword = () => {
  //   setVisibility(!visibility);
  // };

  //? REDIRECT IF LOGED IN
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className="form">
        <p className="title">Sign-In</p>
        {/* <form onSubmit={(e) => onSubmit(e)} method="post">
          <input
            value={email}
            onChange={(e) => onChange(e)}
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
                <i className="fas fa-eye"></i>
              </span>
            ) : (
              <span className="toggle-icon">
                <i className="fas fa-eye-slash" onClick={togglePassword}></i>
              </span>
            )}
          </div>
          <br />
          <input className="btn" type="submit" value="Login" />
        </form> */}
        <a type="submit" href="https://troopers421.herokuapp.com/login/google">
          <GoogleButton label="Continue with Google" />
        </a>
        {/* <a type="submit" href="http://127.0.0.1:5000/login/google">
          <GoogleButton label="Continue with Google" />
        </a> */}

        {/* <p className="have-account">
          Don't have an account Yet.{" "}
          <span>
            <Link
              style={{
                textDecoration: "none",
                fontFamily: "Rock salt cursive",
              }}
              to="/register"
            >
              Sign-Up
            </Link>
          </span>
        </p> */}
      </div>
    </Fragment>
  );
};

LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(LogIn);
