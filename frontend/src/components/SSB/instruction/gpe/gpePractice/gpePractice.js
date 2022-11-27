import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

const GpePractice = () => {
  const { setNumber } = useParams();
  return (
    <div>
      <Helmet>
        <title>GPE Instructions</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/group-planning-exercise-gpe"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <div className="instruction">
        <div className="ins_header">
          <h1>GPE Instructions</h1>
        </div>
        <div className="ins_body">
          <p>1. A GPE Model will be displayed on the screen.</p>
          <p>
            2. Below will be a Story and Instructions related to the given
            Model.
          </p>
          <p>
            3. Co-relate the story/Instructions with the given Model and write
            your Solution to the various Problems.
          </p>
          <p>4. There will be a count-up timmer top right to the screen.</p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/group-planning-exercise-gpe/practice-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GpePractice;
