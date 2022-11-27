import React from "react";
import Navbar from "../../../navbar/navbar";
// import Card from "../../../../custom/cards/card";
import CardTwo from "../../../../custom/cards/cardTwo";

import "../sets.css";
import Title from "../../../../custom/Title/Title";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const GPESets = () => {
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
        <title>GPE Practice Sets</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/group-planning-exercise-gpe"
        />
      </Helmet>
      <Navbar />
      <Title title="GPE Practice Sets" />
      <div className="sets">
        <CardTwo
          img="/images/icons/set.png"
          title="Set 1"
          url="/group-planning-exercise-gpe/practice-instruction/one"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 2"
          url="/group-planning-exercise-gpe/practice-instruction/two"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 3"
          url="/group-planning-exercise-gpe/practice-instruction/three"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 4"
          url="/group-planning-exercise-gpe/practice-instruction/four"
        />
        <CardTwo
          img="/images/icons/set.png"
          title="Set 5"
          url="/group-planning-exercise-gpe/practice-instruction/five"
        />
      </div>
    </div>
  );
};

export default GPESets;
