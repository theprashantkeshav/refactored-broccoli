import React, { Fragment } from "react";
import Combo from "../../custom/courses/combo";
import Test from "../../custom/courses/test";
import Lecture from "../../custom/courses/lecture";
import styles from "./comingSoon.module.css";

const ComingSoon = () => {
  return (
    <Fragment>
      <div className={styles.comingSoon}>
        <div>
          <Combo />
        </div>
        <div>
          <Test />
        </div>
        <div>
          <Lecture />
        </div>
      </div>
    </Fragment>
  );
};

export default ComingSoon;
