import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { gpeQuestions } from "./allPracticeContents";
import { gpeReponses } from "./allPracticeContents";
import styles from "../tat/practiceTat.module.css";
import { Helmet } from "react-helmet";

const GPE = () => {
  const { setNumber } = useParams();
  var history = useHistory();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [end, setEnd] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const myInterval = useRef(null);
  const itemRef = useRef();

  var presentSet = gpeReponses[setNumber];
  var contents = gpeQuestions[setNumber];

  useEffect(() => {
    myInterval.current = setInterval(() => {
      if (seconds < 59) {
        setSeconds(seconds + 1);
      } else {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval.current);
    };
  }, [minutes, seconds]);

  function handleEnd() {
    setEnd(true);
    clearInterval(myInterval.current);
  }

  function handleResponse() {
    setShowResponse(!showResponse);
    if (!itemRef.current) return;
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Helmet>
        <title>GPE Practice Set {setNumber}</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/group-planning-exercise-gpe"
        />
      </Helmet>
      {end ? (
        <div className="instruction">
          <div className="ins_header">
            <h1>Result</h1>
          </div>
          <div className="result_body">
            <p>
              Total Time -{" "}
              <label>{minutes < 10 ? `0${minutes}` : minutes}</label>:
              <label>{seconds < 10 ? `0${seconds}` : seconds}</label>
            </p>
            {/* <p>Avg Time per slide - {avgTime} minutes</p> */}
          </div>
          <div className="ins_footer">
            <Link className="btn_next" to="/">
              Home
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.tat}>
          <div className={styles.tatHeader}>
            <div>
              <button onClick={handleEnd} className="btn_exit">
                Exit
              </button>
            </div>
            <div>
              <p>
                <label>{minutes < 10 ? `0${minutes}` : minutes}</label>:
                <label>{seconds < 10 ? `0${seconds}` : seconds}</label>
              </p>
            </div>
          </div>
          <div className={styles.tatBody}>
            <div className={styles.gpeImg}>
              <img
                src={`/images/gpe/gpePractice/${setNumber}.jpg`}
                alt="SSB TAT - Thematic Apperception Test"
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

            <button
              className="btn_next"
              onClick={() =>
                setNumber !== "one"
                  ? isPremium
                    ? handleResponse()
                    : history.push("/premium")
                  : handleResponse()
              }
            >
              Solution
            </button>
            <div className={styles.gpeContent} ref={itemRef}>
              {showResponse ? (
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
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GPE;
