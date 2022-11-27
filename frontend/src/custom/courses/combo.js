import React, { Fragment } from "react";
import "./courses.css";

const Combo = () => {
  return (
    <Fragment>
      <div className="package">
        <p className="type">Full Module</p>
        <p className="info">Total 100 Hours</p>
        <div className="content">
          <p>40 Hours of Lecture followed by Q&A Session.</p>
          <p>Practice Session with Evaluation.</p>
          <p>2 Full Test.</p>
        </div>
        <div className="bottom">
          <p>Coming Soon</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Combo;
