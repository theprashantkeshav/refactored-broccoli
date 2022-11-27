import React from "react";
import { Link, useParams } from "react-router-dom";
import { ppdtResponses } from "./allTestPPDTs";
import styles from "../../tat/practiceTat.module.css";
import { Helmet } from "react-helmet";

const TestResponsePage = () => {
  const { setNumber } = useParams();
  var presentSet = ppdtResponses[setNumber];
  return (
    <div>
      <Helmet>
        <title>PPDT Set {setNumber} solution</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/picture-perception-and-descriptive-test-ppdt"
        />
      </Helmet>
      <div className={styles.tat}>
        <div className={styles.tatHeader}>
          <div>
            <Link className="btn_exit" to="/">
              Exit
            </Link>
          </div>
          <div className="timer">
            <p>PPDT {setNumber[0].toUpperCase() + setNumber.substring(1)}</p>
          </div>
        </div>
        <div className={styles.tatBody}>
          <div>
            <img
              src={`/images/ppdtTest/${setNumber}.jpg`}
              alt="ssb ppdt - Perception and description test"
            />
            <div className={styles.PPDTResponse}>
              {presentSet.map((res, index) => {
                const character = res.character;
                const action = res.action;
                const story = res.story;
                return (
                  <div key={index}>
                    <h1>{`Story${index + 1}`}</h1>
                    <p>{`Character - ${character}`}</p>
                    <p>{`Action - ${action}`}</p>
                    <p>{story}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResponsePage;
