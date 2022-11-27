import React from "react";
import Navbar from "../../../navbar/navbar";
import Title from "../../../../custom/Title/Title";
import Card from "../../../../custom/cards/card";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "../practiceOrTest.css";

const GpePT = () => {
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;
  return (
    <div>
      <Helmet>
        <script
          async
          src={
            !isPremium
              ? "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1118254417798757"
              : ""
          }
          crossorigin="anonymous"
        />
        <title>10 Full Sets of SSB GPE Samples With Solution | Troppers </title>
        <meta
          name="description"
          content="10 Full Sets of SSB Group Planning Exercise (GPE) Sample Images With Solution | Practice And Test Module | Service Selection Board."
        />
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/group-planning-exercise-gpe"
        />
      </Helmet>
      <Navbar />
      <Title title="Group Planning Exercise(GPE)" />
      <div className="pot-card">
        <Card
          img="/images/icons/practice.png"
          title="Practice"
          url="/group-planning-exercise-gpe/practice-exercise"
        />
        <Card
          img="/images/icons/test.png"
          title="Test"
          url="/group-planning-exercise-gpe-test-module"
        />
      </div>
    </div>
  );
};

export default GpePT;
