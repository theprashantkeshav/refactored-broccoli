import React, { Fragment } from "react";
import Navbar from "../../navbar/navbar";
import Card from "../../../custom/cards/card";
import Title from "../../../custom/Title/Title";
import CardTwo from "../../../custom/cards/cardTwo";

const PracticeModule = () => {
  return (
    <Fragment>
      <Navbar />
      <Title title="Practice Module" />

      <div className="sets">
        <Card
          img="/images/icons/oir.png"
          title="OIR"
          url="/officer-intelligence-rating-test-oir/practice-exercise"
        />

        <Card
          img="/images/icons/ppdt.png"
          title="PP&DT"
          url="/picture-perception-and-descriptive-test-ppdt/practice-exercise"
        />

        <Card
          img="/images/icons/tat.png"
          title="TAT"
          url="/thematic-apperception-test-tat/practice-exercise"
        />

        <Card
          img="/images/icons/wat.png"
          title="WAT"
          url="/word-association-test-wat/practice-exercise"
        />

        <Card
          img="/images/icons/srt.png"
          title="SRT"
          url="/situation-reaction-test-srt/practice-exercise"
        />

        <Card
          img="/images/icons/gpe.png"
          title="GPE"
          url="/group-planning-exercise-gpe/practice-exercise"
        />

        <CardTwo
          img="/images/icons/sd.png"
          title="SDT"
          url="/self-description-test-sdt/instruction"
        />
      </div>
    </Fragment>
  );
};

export default PracticeModule;
