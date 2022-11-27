import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../navbar/navbar";
import { Helmet } from "react-helmet";

import "../instruction.css";

const SD = () => {
  return (
    <div>
      <Helmet>
        <title>
          SSB Self Description Test (SDT) Sample Questions With Answers |
          Troppers
        </title>
        <meta
          name="description"
          content="SSB Self Description Test (SDT) Sample Questions With Answers | Practice And Test Module | Service Selection Board."
        />

        <link
          rel="canonical"
          href="https://www.troppers.com/self-description-test-sdt/instruction"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <div className="instruction">
        <div className="ins_header">
          <h1>Self Description Instructions</h1>
        </div>
        <div className="ins_body">
          <p>
            1. Write a suitable answer for the given Questions in the module.
          </p>
          <p>
            2. There is a count down timmer for 15 minutes top right to the
            screen.
          </p>
        </div>
        <div className="ins_footer">
          <Link
            to="/service-selection-board-ssb/self-description-test-sdt"
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SD;
