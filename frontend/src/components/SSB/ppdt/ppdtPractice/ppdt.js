import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, useHistory } from "react-router-dom";
import { ppdtResponses } from "./allPracticePPDT";
import styles from "../../tat/practiceTat.module.css";
import { useSelector } from "react-redux";

const PracticePPDt = () => {
  const { setNumber } = useParams();
  var history = useHistory();
  var presentSet = ppdtResponses[setNumber];
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [end, setEnd] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const myInterval = useRef(null);
  const itemRef = useRef();

  //? TIMMER
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
        <script
          async
          src={
            !isPremium
              ? "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1118254417798757"
              : ""
          }
          crossorigin="anonymous"
        />
        <title>PPDT Practice Set {setNumber} </title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/picture-perception-and-descriptive-test-ppdt"
        />
      </Helmet>
      {end ? (
        <div className="instruction">
          <div className="ins_header">
            <h1>Result</h1>
          </div>
          <div className="result_body">
            <p>
              Total Time-
              <label>{minutes < 10 ? `0${minutes}` : minutes}</label>:
              <label>{seconds < 10 ? `0${seconds}` : seconds}</label>
            </p>
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
                Finish
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
            <div>
              <img
                src={`/images/ppdtPractice/${setNumber}.jpg`}
                alt="ssb ppdt - Perception and description test"
              />
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
              Story
            </button>
            <div className={styles.gpeContent} ref={itemRef}>
              {showResponse ? (
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
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticePPDt;
