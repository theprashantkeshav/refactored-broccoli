import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../../navbar/navbar";
import Title from "../../../../custom/Title/Title";
import CardTwo from "../../../../custom/cards/cardTwo";
import { useSelector } from "react-redux";

import "../sets.css";

const PPDTSets = () => {
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
        <title>PPDT Practice Sets</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/picture-perception-and-descriptive-test-ppdt"
        />
      </Helmet>
      <Navbar />
      <Title title="PP&DT Practice Sets" />
      <div className="sets">
        <CardTwo
          img="/images/icons/set.png"
          title="Set 1"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/one"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 2"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/two"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 3"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/three"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 4"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/four"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 5"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/five"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 6"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/six"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 7"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/seven"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 8"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/eight"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 9"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/nine"
        />

        <CardTwo
          img="/images/icons/set.png"
          title="Set 10"
          url="/picture-perception-and-discussion-test-ppdt/practice-instruction/ten"
        />
      </div>
    </div>
  );
};

export default PPDTSets;
