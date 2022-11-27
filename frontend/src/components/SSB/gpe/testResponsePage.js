import React from "react";
import { Link, useParams } from "react-router-dom";
import { gpeQuestions } from "./allTestContents";
import { gpeReponses } from "./allTestContents";
import styles from "../tat/practiceTat.module.css";
import { Helmet } from "react-helmet";

const TestResponsePage = () => {
  const { setNumber } = useParams();
  var presentSet = gpeReponses[setNumber];
  var contents = gpeQuestions[setNumber];
  return (
    <div>
      <Helmet>
        <title>GPE Set {setNumber} Solution</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/group-planning-exercise-gpe"
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
            <p>GPE {setNumber[0].toUpperCase() + setNumber.substring(1)}</p>
          </div>
        </div>
        <div className={styles.tatBody}>
          <div>
            <div className={styles.gpeImg}>
              <img
                src={`/images/gpe/gpeTest/${setNumber}.jpg`}
                alt="ssb ppdt - Perception and description test"
              />
            </div>
            <div className={styles.TATTestResponse}>
              {contents.map((content, index) => {
                const infos = content.additionalInfo;
                return (
                  <div key={index}>
                    <h4>Scale - {content.scale}</h4>
                    <p>{content.situation}</p>
                    <p>{infos && "Additional Information:"}</p>
                    {infos &&
                      infos.map((info, index) => {
                        return (
                          <div className={styles.li}>
                            <li key={index}>{info}</li>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
            <div className={styles.TATTestResponse}>
              <h1>Response:-</h1>
            </div>

            <div className={styles.GPEResponse}>
              {presentSet.map((res, index) => {
                return (
                  <div key={index}>
                    <p>{res.intro}</p>
                    <h3>
                      {res.problemN && `${res.problemN} -`} {res.problem}
                    </h3>
                    <div className={styles.solution}>
                      <p>{res.solution}</p>

                      <p>
                        {res.time === undefined ? "" : `Time - ${res.time}`}
                      </p>
                      <p>
                        {res.distance === undefined
                          ? ""
                          : `Distance - ${res.distance}`}
                      </p>
                    </div>
                    <p>{res.final}</p>
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
