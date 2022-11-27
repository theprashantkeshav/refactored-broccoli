import React from "react";
import { Link, useParams } from "react-router-dom";
import { words } from "../allTestwords";
import styles from "../../tat/practiceTat.module.css";
import { Helmet } from "react-helmet";

const TestResponsePage = () => {
  const { setNumber } = useParams();

  var presentSet = words[setNumber];

  return (
    <div>
      <Helmet>
        <title>WAT Set {setNumber} Solution</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/word-association-test-wat"
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
            <p>WAT {setNumber[0].toUpperCase() + setNumber.substring(1)}</p>
          </div>
        </div>
        <div className={styles.tatBody}>
          {presentSet.map((response, index) => {
            return (
              <div key={index}>
                <div className={styles.SRTTestTxt}>
                  <p>{index === 60 ? "" : `${index + 1} - ${response.text}`}</p>
                </div>
                <div className={styles.SRTTestResponse}>
                  <p>{index === 60 ? "" : `Ans - ${response.response}`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestResponsePage;
