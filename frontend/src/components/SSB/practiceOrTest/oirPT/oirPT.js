import React from "react";
import Navbar from "../../../navbar/navbar";
import Title from "../../../../custom/Title/Title";
import Card from "../../../../custom/cards/card";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "../practiceOrTest.css";

const OirPT = () => {
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
        <title>
          10 Full Sets of SSB OIR Test Questions With Answers | Troppers
        </title>
        <meta
          name="description"
          content="10 Full sets of SSB Officers Intelligence Rating (OIR) Test Sample Paper With Answers, Verbal And Non-Verbal OIR Test Questions With Practice And Test Module | Service Selection Board."
        />

        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/officer-intelligence-rating-test-oir"
        />
      </Helmet>
      <Navbar />
      <Title title="Officer Intelligence Rating(OIR)" />
      <div className="pot-card">
        <Card
          img="/images/icons/practice.png"
          title="Practice"
          url="/officer-intelligence-rating-test-oir/practice-exercise"
        />
        <Card
          img="/images/icons/test.png"
          title="Test"
          url="/officer-intelligence-rating-test-oir-exercise"
        />
      </div>
    </div>
  );
};

export default OirPT;
