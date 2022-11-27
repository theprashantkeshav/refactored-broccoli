import React from "react";
import Navbar from "../../../navbar/navbar";
import CardTwo from "../../../../custom/cards/cardTwo";

import "../sets.css";
import Title from "../../../../custom/Title/Title";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const TATSets = () => {
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
        <title>TAT Practice Sets</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/thematic-apperception-test-tat"
        />
      </Helmet>
      <Navbar />
      <Title title="TAT Practice Sets" />
      <div className="sets">
        <CardTwo
          img="/images/icons/set.png"
          title="Set 1"
          url="/thematic-apperception-test-tat/practice-instruction/one"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 2"
          url="/thematic-apperception-test-tat/practice-instruction/two"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 3"
          url="/thematic-apperception-test-tat/practice-instruction/three"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 4"
          url="/thematic-apperception-test-tat/practice-instruction/four"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 5"
          url="/thematic-apperception-test-tat/practice-instruction/five"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 6"
          url="/thematic-apperception-test-tat/practice-instruction/six"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 7"
          url="/thematic-apperception-test-tat/practice-instruction/seven"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 8"
          url="/thematic-apperception-test-tat/practice-instruction/eight"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 9"
          url="/thematic-apperception-test-tat/practice-instruction/nine"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 10"
          url="/thematic-apperception-test-tat/practice-instruction/ten"
        />
      </div>
    </div>
  );
};

export default TATSets;
