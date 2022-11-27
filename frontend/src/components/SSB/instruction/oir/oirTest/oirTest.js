import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

import "../../instruction.css";

const OirTest = () => {
  const { setNumber } = useParams();

  return (
    <div>
      <Helmet>
        <title>OIR Instruction</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/officer-intelligence-rating-test-oir"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <div className="instruction">
        <div className="ins_header">
          <h1>OIR Instruction</h1>
        </div>
        <div className="ins_body">
          <p>
            1. There are 40 questions in this module and every question has 4
            options.
          </p>
          <p>
            2. On clicking the correct option will turn green while the wrong
            will turn red.
          </p>
          <p>3. One point will be awarded for every correct answer.</p>
          <p>4. You will be given 17 minutes to complete this module.</p>
          <p>
            5. There is question count top left to the screen and count down
            timmer top right to the screen.
          </p>
          <p>
            6. Once the Module is completed scoreboard will be displayed on the
            screen.
          </p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/officer-intelligence-rating-test-oir-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OirTest;
