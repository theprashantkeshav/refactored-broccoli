import React from "react";
import Card from "../../custom/cards/card";
import CardTwo from "../../custom/cards/cardTwo";
import styles from "./course.module.css";

const Course = () => {
  return (
    <div className={` ${styles.course}`}>
      <div>
        <Card
          img="/images/icons/oir.png"
          title="OIR"
          url="/service-selection-board-ssb/officer-intelligence-rating-test-oir"
        />
      </div>
      <div>
        <Card
          img="/images/icons/ppdt.png"
          title="PP&DT"
          url="/service-selection-board-ssb/picture-perception-and-descriptive-test-ppdt"
        />
      </div>
      <div>
        <Card
          img="/images/icons/tat.png"
          title="TAT"
          url="/service-selection-board-ssb/thematic-apperception-test-tat"
        />
      </div>
      <div>
        <Card
          img="/images/icons/wat.png"
          title="WAT"
          url="/service-selection-board-ssb/word-association-test-wat"
        />
      </div>
      <div>
        <Card
          img="/images/icons/srt.png"
          title="SRT"
          url="/service-selection-board-ssb/situation-reaction-test-srt"
        />
      </div>
      <div>
        <Card
          img="/images/icons/gpe.png"
          title="GPE"
          url="/service-selection-board-ssb/group-planning-exercise-gpe"
        />
      </div>
      <div>
        <CardTwo
          img="/images/icons/sd.png"
          title="SDT"
          url="/self-description-test-sdt/instruction"
        />
      </div>
    </div>
  );
};

export default Course;
