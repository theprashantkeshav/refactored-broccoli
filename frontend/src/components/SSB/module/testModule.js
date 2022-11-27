import React, { Fragment } from "react";
import Navbar from "../../navbar/navbar";
import Card from "../../../custom/cards/card";
import Title from "../../../custom/Title/Title";
import CardTwo from "../../../custom/cards/cardTwo";

const TestModule = () => {
  return (
    <Fragment>
      <Navbar />
      <Title title="Test Module" />
      <div className="sets">
        <Card
          img="/images/icons/oir.png"
          title="OIR"
          url="/officer-intelligence-rating-test-oir-exercise"
        />

        <Card
          img="/images/icons/ppdt.png"
          title="PP&DT"
          url="/picture-perception-and-descriptive-test-ppdt-exercise"
        />

        <Card
          img="/images/icons/tat.png"
          title="TAT"
          url="/thematic-apperception-test-tat-exercise"
        />

        <Card
          img="/images/icons/wat.png"
          title="WAT"
          url="/word-association-test-wat-exercise"
        />

        <Card
          img="/images/icons/srt.png"
          title="SRT"
          url="/situation-reaction-test-srt-exercise"
        />

        <Card
          img="/images/icons/gpe.png"
          title="GPE"
          url="/group-planning-exercise-gpe-test-module"
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

export default TestModule;
