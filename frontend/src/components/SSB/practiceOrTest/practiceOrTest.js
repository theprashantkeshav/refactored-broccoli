import React, { Fragment } from "react";
import Navbar from "../../navbar/navbar";
import Card from "../../../custom/cards/card";

import "./practiceOrTest.css";

const PracticeOrTest = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="pot-card">
        <Card img="/images/icons/practice.png" title="Practice" />
        <Card img="/images/icons/test.png" title="Test" />
      </div>
    </Fragment>
  );
};

export default PracticeOrTest;
