import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { situations } from "../allPracticeSRTs";
import styles from "../../tat/practiceTat.module.css";

const SRTPractice = () => {
  const { setNumber } = useParams();
  var history = useHistory();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [current, setCurrent] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [end, setEnd] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const myInterval = useRef(null);

  var presentSet = situations[setNumber];

  const audio = new Audio("/sound/click.mp3");

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

  function start() {
    audio.play();
  }

  function handleNext() {
    start();
    setCurrent(current + 1);
    setShowResponse(false);
  }

  function handlePrev() {
    start();
    setCurrent(current - 1);
    if (current === 0) {
      setCurrent(0);
    }
    setShowResponse(false);
  }

  function handleEnd() {
    setEnd(true);
    clearInterval(myInterval.current);
  }

  function handleResponse() {
    setShowResponse(!showResponse);
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
        <title>SRT Practice Set {setNumber}</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/situation-reaction-test-srt"
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
              <p>
                {current + 1}/{presentSet.length}
              </p>
            </div>
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
            <div className={styles.icon}>
              <i
                onClick={handlePrev}
                className={`fas fa-arrow-circle-left ${styles.SRTleftArrow}`}
              ></i>

              {current + 1 === presentSet.length ? (
                <i
                  onClick={handleEnd}
                  class={`fas fa-sign-out-alt ${styles.SRTrightArrow}`}
                ></i>
              ) : (
                <i
                  onClick={handleNext}
                  className={`fas fa-arrow-circle-right ${styles.SRTrightArrow}`}
                ></i>
              )}
            </div>
            <div className={styles.situations}>
              <p>{presentSet[current].text}</p>
            </div>
            <button
              className={styles.SRTresponseBtn}
              onClick={() =>
                setNumber !== "one"
                  ? isPremium
                    ? handleResponse()
                    : history.push("/premium")
                  : handleResponse()
              }
            >
              Answer
            </button>
            <div className={styles.SRTResponse}>
              <p>
                {showResponse
                  ? situations[`${setNumber}`][current].response
                  : null}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SRTPractice;
