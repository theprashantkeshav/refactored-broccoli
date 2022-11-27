import React, { Fragment } from "react";

const Lecture = () => {
  return (
    <Fragment>
      <div className="package">
        <div className="type">
          <p>Lecture Module</p>
        </div>

        <p className="info">With Q&A Session</p>

        <div className="content">
          <p>PIQ Form Filling</p>
          <p>Reasoning Classes</p>
          <p>Personality Development</p>
          <p>Psychology Classes</p>
          <p>GTO Classes</p>
          <p>English Speaking</p>
        </div>
        <div className="bottom">
          <p>Coming Soon</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Lecture;
