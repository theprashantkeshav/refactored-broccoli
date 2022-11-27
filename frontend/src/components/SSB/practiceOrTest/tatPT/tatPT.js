import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../navbar/navbar";
import Title from "../../../../custom/Title/Title";
import Card from "../../../../custom/cards/card";
import { useSelector } from "react-redux";

import "../practiceOrTest.css";

const TatPT = () => {
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
        <title>20 Full Sets of SSB TAT Pictures With Stories | Troppers</title>
        <meta
          name="description"
          content="20 Full Sets of SSB Thematic Apperception Test (TAT) Sample Images With Stories | Practice And Test Module | Service Selection Board."
        />

        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/thematic-apperception-test-tat"
        />
      </Helmet>
      <Navbar />
      <Title title="Thematic Apperception Test(TAT)" />
      <div className="pot-card">
        <Card
          img="/images/icons/practice.png"
          title="Practice"
          url="/thematic-apperception-test-tat/practice-exercise"
        />
        <Card
          img="/images/icons/test.png"
          title="Test"
          url="/thematic-apperception-test-tat-exercise"
        />
      </div>
    </div>
  );
};

export default TatPT;
