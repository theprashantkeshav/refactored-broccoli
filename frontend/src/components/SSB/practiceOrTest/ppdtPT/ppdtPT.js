import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../navbar/navbar";
import Title from "../../../../custom/Title/Title";
import Card from "../../../../custom/cards/card";
import { useSelector } from "react-redux";

import "../practiceOrTest.css";

const PpdtPT = () => {
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
        <title>20 Full Sets of SSB PPDT Pictures With Stories | Troppers</title>
        <meta
          name="description"
          content="20 Full Sets of SSB Picture Perception & Discussion Test (PPDT) Blurred Images With Stories | Practice And Test Module | Service Selection Board."
        />
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/picture-perception-and-descriptive-test-ppdt"
        />
      </Helmet>
      <Navbar />
      <Title title="Picture Perception And Descriptive Test(PPDT)" />
      <div className="pot-card">
        <Card
          img="/images/icons/practice.png"
          title="Practice"
          url="/picture-perception-and-descriptive-test-ppdt/practice-exercise"
        />
        <Card
          img="/images/icons/test.png"
          title="Test"
          url="/picture-perception-and-descriptive-test-ppdt-exercise"
        />
      </div>
    </div>
  );
};

export default PpdtPT;
