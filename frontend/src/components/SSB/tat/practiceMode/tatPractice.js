import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { responses } from "./allPracticeResponses";

import styles from "../practiceTat.module.css";

const TatSetOne = () => {
  const { setNumber } = useParams();
  var history = useHistory();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [current, setCurrent] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [end, setEnd] = useState(false);
  const [currentResponse, setCurrentResponse] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const myInterval = useRef(null);
  const itemRef = useRef();

  const presentSet = responses[setNumber];
  const length = presentSet.length;

  const audio = new Audio("/sound/click.mp3");

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

  function start() {
    audio.play();
  }

  function handleNext() {
    // setCurrent(current + 1);
    start();
    setCurrent(current === length - 1 ? 0 : current + 1);
    if (current === 11) {
      setCurrent(11);
    }
    setShowResponse(false);
    setCurrentResponse(currentResponse + 1);
  }

  function handlePrev(event) {
    // setCurrent(current - 1);
    start();
    setCurrent(current === 0 ? length - 1 : current - 1);
    if (current === 0) {
      setCurrent(0);
    }
    setShowResponse(false);
    setCurrentResponse(currentResponse - 1);
    if (currentResponse === 0) {
      setCurrentResponse(0);
    }
  }

  function handleEnd() {
    setEnd(true);
    clearInterval(myInterval.current);
  }

  function handleResponse() {
    setShowResponse(!showResponse);
    if (!itemRef.current) return;
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // const avgTime = Math.round((minutes * 60 + seconds) / (60 * 12));

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
        <title>TAT Practice set {setNumber}</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/thematic-apperception-test-tat"
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
              <p>{current + 1}/12</p>
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
                className={`fas fa-arrow-circle-left ${styles.tat_leftArrow}`}
              ></i>

              {current === 11 ? (
                <i
                  onClick={handleEnd}
                  class={`fas fa-sign-out-alt ${styles.tat_rightArrow}`}
                ></i>
              ) : (
                <i
                  onClick={handleNext}
                  className={`fas fa-arrow-circle-right ${styles.tat_rightArrow}`}
                ></i>
              )}
            </div>

            <div>
              {presentSet.map((slide, index) => {
                return (
                  <div key={index}>
                    {index === current && (
                      <img src={`${slide.img}.jpg`} alt={`SSB TAT Images`} />
                    )}
                  </div>
                );
              })}
            </div>

            <button
              className={styles.WATresponseBtn}
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
            <div className={styles.TATResponse} ref={itemRef}>
              <p>
                {showResponse ? presentSet[currentResponse].response : null}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TatSetOne;
