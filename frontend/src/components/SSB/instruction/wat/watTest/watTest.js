import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

import "../../instruction.css";

const WatTest = () => {
  const { setNumber } = useParams();

  return (
    <div>
      <Helmet>
        <title>WAT Instructions</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/word-association-test-wat"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <div className="instruction">
        <div className="ins_header">
          <h1>WAT Instructions</h1>
        </div>
        <div className="ins_body">
          <p>1. This module contains 60 words.</p>
          <p>2. Every word will be displayed on the screen for 15 seconds.</p>
          <p>3. write a suitable sentence based on the given words.</p>
          <p>4. The process will continue for 60 consecutive words.</p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/word-association-test-wat-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WatTest;
