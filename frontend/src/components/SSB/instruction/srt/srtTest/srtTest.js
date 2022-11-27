import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

import "../../instruction.css";

const SRTTest = () => {
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
          <p>
            2. Every situation will be displayed on the screen for 30 seconds.
          </p>
          <p>3. write a suitable response based on the given situation.</p>
          <p>4. The process will continue for 60 consecutive situations.</p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/situation-reaction-test-srt-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SRTTest;
