import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { situations } from "../allTestSRTs";

import styles from "../../tat/practiceTat.module.css";

const SRTTest = () => {
  const { setNumber } = useParams();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [current, setCurrent] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [end, setEnd] = useState(false);

  var presentSet = situations[setNumber];

  //? TIMMER
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);

  useEffect(() => {
    let currentInterval = setInterval(() => {
      const audio = new Audio("/sound/click.mp3");
      setCurrent(current + 1);
      audio.play();
    }, 30000);

    if (current % 2 === 0) {
      setSeconds(30);
    } else {
      setSeconds(30);
    }

    if (current + 1 === presentSet.length) {
      setEnd(true);
    }

    return () => {
      clearInterval(currentInterval);
    };
  }, [current, presentSet.length]);

  function handleEnd() {
    setEnd(true);
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
        <title>SRT Test Set {setNumber}</title>
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
            <p>Module Complete.</p>
          </div>
          <div className="ins_footer">
            <Link className="btn_next" to="/">
              Home
            </Link>
            <Link
              className="btn_next"
              to={
                isPremium
                  ? `/situation-reaction-test-srt-solution/${setNumber}`
                  : "/premium"
              }
            >
              Answer
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.tat}>
          <div className={styles.tatHeader}>
            <div>
              <p>
                {current + 1}/{presentSet.length - 1}
              </p>
            </div>
            <div>
              <button onClick={handleEnd} className="btn_exit">
                Exit
              </button>
            </div>
            <div className="timer">
              <p>
                <label id="minutes">
                  {minutes < 10 ? `0${minutes}` : minutes}
                </label>
                :
                <label id="seconds">
                  {seconds < 10 ? `0${seconds}` : seconds}
                </label>
              </p>
            </div>
          </div>
          <div className={styles.tatBody}>
            <div className={styles.situations}>
              <p>{presentSet[current].text}</p>
            </div>
            <Link
              className="btn_next"
              to={
                isPremium
                  ? `/situation-reaction-test-srt-solution/${setNumber}`
                  : "/premium"
              }
            >
              Answer
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SRTTest;
