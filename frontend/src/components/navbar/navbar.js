import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT2, PAYMENT_SUCCESS } from "../../actions/types";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import "./navbar.css";

const Navbar = ({ auth: { loading, isAuthenticated }, payment, dispatch }) => {
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  function changeBackground() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  function handleLogout() {
    dispatch({ type: LOGOUT2 });
    dispatch({ type: PAYMENT_SUCCESS, payload: false });
    window.location.assign(window.location.origin);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const authLinks = (
    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
      <li>
        <Link
          className={navbar ? "nav-links active" : "nav-links"}
          to={
            isPremium
              ? "/service-selection-board-ssb/practice-module"
              : "/faculties"
          }
        >
          {isPremium ? "Practice" : "Faculty"}
        </Link>
        <Link
          className={navbar ? "nav-links active" : "nav-links"}
          to={isPremium ? "/service-selection-board-ssb/test-module" : "/demo"}
        >
          {isPremium ? "Test" : "Demo"}
        </Link>
        <Link
          className={navbar ? "nav-links active" : "nav-links"}
          to="/contact"
        >
          Contact US
        </Link>
        <Link
          onClick={handleLogout}
          className={navbar ? "nav-links-mobile active" : "nav-links-mobile"}
          to="/#"
        >
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
      <li>
        <Link
          className={navbar ? "nav-links active" : "nav-links"}
          to="/faculties"
        >
          Faculty
        </Link>
        <Link className={navbar ? "nav-links active" : "nav-links"} to="/demo">
          Demo
        </Link>
        <Link
          className={navbar ? "nav-links active" : "nav-links"}
          to="/contact"
        >
          Contact US
        </Link>
        <Link
          className={navbar ? "nav-links-mobile active" : "nav-links-mobile"}
          to="/login"
        >
          Sign-In
        </Link>
      </li>
    </ul>
  );

  return (
    <Fragment>
      <nav className={navbar ? "navbarItems active" : "navbarItems"}>
        <Link className={navbar ? "navbar-logo active" : "navbar-logo"} to="/">
          troppers {isPremium && <span className="p-member">Premium</span>}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i
            className={
              clicked
                ? navbar
                  ? "fas fa-times active"
                  : "fas fa-times"
                : navbar
                ? "fas fa-bars active"
                : "fas fa-bars"
            }
          ></i>
        </div>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  // logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  payment: state.payment,
});

export default connect(mapStateToProps, null)(Navbar);
