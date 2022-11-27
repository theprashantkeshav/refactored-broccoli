import React from "react";
import { useParams } from "react-router-dom";

//?REDUX
import { connect } from "react-redux";
import { setToken } from "../../actions/auth";
import { Redirect } from "react-router";

const Auth = ({ setToken }) => {
  let { token } = useParams();

  setToken(token);
  return <Redirect to="/" />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setToken })(Auth);
