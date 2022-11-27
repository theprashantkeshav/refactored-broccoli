import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../../navbar/navbar";
import Title from "../../../../custom/Title/Title";
// import Card from "../../../../custom/cards/card";
import CardTwo from "../../../../custom/cards/cardTwo";
import { useSelector } from "react-redux";

import "../sets.css";

const OirSets = () => {
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
        <title>OIR Practice Sets</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/officer-intelligence-rating-test-oir"
        />
      </Helmet>
      <Navbar />
      <Title title="OIR Practice Sets" />
      <div className="sets">
        <CardTwo
          img="/images/icons/set.png"
          title="Set 1"
          url="/officer-intelligence-rating-oir/practice-instruction/one"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 2"
          url="/officer-intelligence-rating-oir/practice-instruction/two"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 3"
          url="/officer-intelligence-rating-oir/practice-instruction/three"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 4"
          url="/officer-intelligence-rating-oir/practice-instruction/four"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 5"
          url="/officer-intelligence-rating-oir/practice-instruction/five"
        />
        {/* <MoreSet /> */}
      </div>
    </div>
  );
};

export default OirSets;
