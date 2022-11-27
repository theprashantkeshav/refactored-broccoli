import React from "react";
import { responses } from "./allTestResponses";
import { Link, useParams } from "react-router-dom";
import styles from "../../tat/practiceTat.module.css";
import { Helmet } from "react-helmet";

const TestResponsePage = () => {
  const { setNumber } = useParams();
  var presentSet = responses[setNumber];
  return (
    <div>
      <Helmet>
        <title>TAT Set {setNumber} Stories</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/thematic-apperception-test-tat"
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
            <p>TAT {setNumber[0].toUpperCase() + setNumber.substring(1)}</p>
          </div>
        </div>
        <div className={styles.tatBody}>
          {presentSet.map((response, index) => {
            return (
              <div key={index}>
                <h1 style={{ color: "#05386b" }}>
                  {index === 11 ? "Blank" : index + 1}
                </h1>
                <img
                  src={`/images/tatTest/${setNumber}/${response.img}.jpg`}
                  alt={`TAT set ${setNumber} stories`}
                />

                <div className={styles.TATTestResponse}>
                  <p>{response.response}</p>
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
