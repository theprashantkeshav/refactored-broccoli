import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

import "../../instruction.css";

const TatTest = () => {
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
            1. This module contains 11 pictures and blank sheets which will be
            displayed on the screen.
          </p>
          <p>
            2. Every picture will be displayed on the screen for 30 seconds.
          </p>
          <p>
            3. After 30 seconds a black sheet will appear on the screen for 4
            minutes.
          </p>
          <p>4. Write a story based on the picture in that 4 minutes.</p>
          <p>5. The Process will continue for 11 consecutive pictures.</p>
          <p>
            6. After 11 pictures a Blank white sheet will appear on the screen
            for 4 minutes.
          </p>
          <p>7. Write your own story for that blank white sheet.</p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/thematic-apperception-test-tat-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TatTest;
