import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

import "../../instruction.css";

const TatPractice = () => {
  const { setNumber } = useParams();

  return (
    <div>
      <Helmet>
        <title>TAT Instructions</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/thematic-apperception-test-tat"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <div className="instruction">
        <div className="ins_header">
          <h1>TAT Instructions</h1>
        </div>
        <div className="ins_body">
          <p>
            1. This module contains 11 pictures and a blank sheet which will be
            displayed on the screen.
          </p>
          <p>2. Press the arrow to move forward and backward.</p>
          <p>3. Write a story based on every given picture.</p>
          <p>4. After 11 pictures a Blank sheet will appear on the screen.</p>
          <p>5. Write your own story for that blank sheet.</p>
          <p>
            6. Count Index is shown on the top left and count-up timmer on the
            top right.
          </p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/thematic-apperception-test-tat/practice-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TatPractice;
