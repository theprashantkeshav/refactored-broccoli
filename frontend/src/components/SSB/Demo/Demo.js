import React from "react";
import Card from "../../../custom/cards/card";
import Navbar from "../../navbar/navbar";
import Title from "../../../custom/Title/Title";
import styles from "../../course/course.module.css";

const Demo = () => {
  return (
    <div>
      <Navbar />
      <Title title="Demo" />
      <div className={` ${styles.demo}`}>
        <div>
          <Card
            img="/images/icons/oir.png"
            title="OIR"
            url="/officer-intelligence-rating-oir/practice-instruction/one"
          />
        </div>
        <div>
          <Card
            img="/images/icons/ppdt.png"
            title="PP&DT"
            url="/picture-perception-and-discussion-test-ppdt/practice-instruction/one"
          />
        </div>
        <div>
          <Card
            img="/images/icons/tat.png"
            title="TAT"
            url="/thematic-apperception-test-tat/practice-instruction/one"
          />
        </div>
        <div>
          <Card
            img="/images/icons/wat.png"
            title="WAT"
            url="/word-association-test-wat/practice-instruction/one"
          />
        </div>
        <div>
          <Card
            img="/images/icons/srt.png"
            title="SRT"
            url="/situation-reaction-test-srt/practice-instruction/one"
          />
        </div>
        <div>
          <Card
            img="/images/icons/gpe.png"
            title="GPE"
            url="/group-planning-exercise-gpe/practice-instruction/one"
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
