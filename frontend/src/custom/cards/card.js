import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./card.module.css";

const Card = ({ img, title, url }) => {
  return (
    <Fragment>
      <Link
        // to={isAuthenticated ? url : "/login"}
        to={url}
        style={{
          textDecoration: "none",
        }}
      >
        <div className={styles.card}>
          <img src={img} alt="Icons" />
          <h2
            style={{ color: "#5cdb95", fontWeight: "500", paddingTop: "8px" }}
          >
            {title}
          </h2>
        </div>
      </Link>
    </Fragment>
  );
};

Card.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Card);
