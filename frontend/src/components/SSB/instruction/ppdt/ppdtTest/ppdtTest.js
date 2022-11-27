import React from "react";
import { Helmet } from "react-helmet";

import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

import "../../instruction.css";

const PPDTTest = () => {
  const { setNumber } = useParams();

  return (
    <div>
      <Helmet>
        <title>PPDT Instruction</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/picture-perception-and-descriptive-test-ppdt"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <div className="instruction">
        <div className="ins_header">
          <h1>PP&DT Instructions</h1>
        </div>
        <div className="ins_body">
          <p>1. A picture will be displayed on the screen for 30 seconds.</p>
          <p>
            2. After 30 seconds a blank sheet will appear for the next 4
            minutes.
          </p>
          <p>3. Write a story based on the picture in that 4 minutes.</p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/picture-perception-and-descriptive-test-ppdt-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PPDTTest;
