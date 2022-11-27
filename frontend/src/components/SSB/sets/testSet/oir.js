import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../../navbar/navbar";
import CardTwo from "../../../../custom/cards/cardTwo";
import Title from "../../../../custom/Title/Title";
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
        <title>OIR Test Sets</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/officer-intelligence-rating-test-oir"
        />
      </Helmet>
      <Navbar />
      <Title title="OIR Test Sets" />
      <div className="sets">
        <CardTwo
          img="/images/icons/set.png"
          title="Set 1"
          url="/officer-intelligence-rating-oir-instruction/one"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 2"
          url="/officer-intelligence-rating-oir-instruction/two"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 3"
          url="/officer-intelligence-rating-oir-instruction/three"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 4"
          url="/officer-intelligence-rating-oir-instruction/four"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 5"
          url="/officer-intelligence-rating-oir-instruction/five"
        />
        {/* <MoreSet /> */}
      </div>
    </div>
  );
};

export default OirSets;
