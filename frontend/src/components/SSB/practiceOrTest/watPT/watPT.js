import React from "react";
import Navbar from "../../../navbar/navbar";
import Title from "../../../../custom/Title/Title";
import Card from "../../../../custom/cards/card";
import { useSelector } from "react-redux";

import "../practiceOrTest.css";
import { Helmet } from "react-helmet";

const WatPT = () => {
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
        <title>10 Full Sets of SSB WAT Words With Answers | Troppers</title>
        <meta
          name="description"
          content="10 Full Sets of SSB Word Association Test (WAT) Sample Paper With Answers | Practice And Test Module | Service Selection Board."
        />
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/word-association-test-wat"
        />
      </Helmet>
      <Navbar />
      <Title title="Word Association Test(WAT)" />
      <div className="pot-card">
        <Card
          img="/images/icons/practice.png"
          title="Practice"
          url="/word-association-test-wat/practice-exercise"
        />
        <Card
          img="/images/icons/test.png"
          title="Test"
          url="/word-association-test-wat-exercise"
        />
      </div>
    </div>
  );
};

export default WatPT;
