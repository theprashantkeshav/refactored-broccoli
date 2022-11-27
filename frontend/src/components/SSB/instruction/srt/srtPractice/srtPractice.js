import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

import "../../instruction.css";

const SRTPractice = () => {
  const { setNumber } = useParams();

  return (
    <div>
      <Helmet>
        <title>SRT Instructions</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/situation-reaction-test-srt"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <div className="instruction">
        <div className="ins_header">
          <h1>SRT Instructions</h1>
        </div>
        <div className="ins_body">
          <p>1. This module contains 60 situations.</p>
          <p>2. Click on the arrow to move forward and backward.</p>
          <p>3. write a suitable response based on the given situation.</p>
          <p>
            4. Count Index is shown to the top left screen and count-up timmer
            on the top right.
          </p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/situation-reaction-test-srt/practice-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SRTPractice;
