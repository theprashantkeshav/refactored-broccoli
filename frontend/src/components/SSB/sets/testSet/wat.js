import React from "react";
import Navbar from "../../../navbar/navbar";
import CardTwo from "../../../../custom/cards/cardTwo";

import "../sets.css";
import Title from "../../../../custom/Title/Title";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const WatSets = () => {
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
        <title>WAT Test Sets</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/word-association-test-wat"
        />
      </Helmet>
      <Navbar />
      <Title title="WAT Test Sets" />
      <div className="sets">
        <CardTwo
          img="/images/icons/set.png"
          title="Set 1"
          url="/word-association-test-wat-instruction/one"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 2"
          url="/word-association-test-wat-instruction/two"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 3"
          url="/word-association-test-wat-instruction/three"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 4"
          url="/word-association-test-wat-instruction/four"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 5"
          url="/word-association-test-wat-instruction/five"
        />
      </div>
    </div>
  );
};

export default WatSets;
