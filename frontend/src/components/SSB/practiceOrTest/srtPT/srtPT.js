import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../navbar/navbar";
import Title from "../../../../custom/Title/Title";
import Card from "../../../../custom/cards/card";
import { useSelector } from "react-redux";

import "../practiceOrTest.css";

const SrtPT = () => {
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
        <title>10 Full Sets of SSB SRT Questions With Answers | Troppers</title>
        <meta
          name="description"
          content="10 Full Sets of SSB Situation Reaction Test (SRT) Sample Paper With Answers | Practice And Test Module | Service Selection Board."
        />
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/situation-reaction-test-srt"
        />
      </Helmet>
      <Navbar />
      <Title title="Situation Reaction Test(SRT)" />
      <div className="pot-card">
        <Card
          img="/images/icons/practice.png"
          title="Practice"
          url="/situation-reaction-test-srt/practice-exercise"
        />
        <Card
          img="/images/icons/test.png"
          title="Test"
          url="/situation-reaction-test-srt-exercise"
        />
      </div>
    </div>
  );
};

export default SrtPT;
