import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../navbar/navbar";

const GpeTest = () => {
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
            2. Below will be a Story and Instructions related to the given Model
            which will be displayed on the screen for the next 5 Minutes.
          </p>
          <p>
            3. Co-relate the Story/Instructions with the Model and make a mental
            picture of everything because after 5 Minutes the story/Instructions
            will disappear from the screen and you will be left with the Model
            for the next 10 Minutes.
          </p>
          <p>
            4. Write your Solution to the various Problems in that given 10
            Minutes.
          </p>
        </div>
        <div className="ins_footer">
          <Link
            to={`/group-planning-exercise-gpe-exercise/${setNumber}`}
            className="btn_next"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GpeTest;
