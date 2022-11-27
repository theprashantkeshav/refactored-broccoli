import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styles from "../../tat/practiceTat.module.css";

const TatSetOne = () => {
  const { setNumber } = useParams();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [current, setCurrent] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [end, setEnd] = useState(false);

  // const start = () => {
  //   audio.play();
  // };

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

  //? SLIDE SHOW TIMMER
  useEffect(() => {
    let currentInterval = setInterval(
      () => {
        const audio = new Audio("/sound/click.mp3");
        setCurrent(current + 1);
        audio.play();
      },
      current % 2 === 0 ? 240000 : current === 23 ? 240000 : 30000
    );

    if (current % 2 === 0) {
      setMinutes(4);
      setSeconds(0);
    } else if (current === 23) {
      setMinutes(4);
      setSeconds(0);
    } else {
      setSeconds(30);
      setMinutes(0);
    }

    if (current > 23) {
      clearInterval(currentInterval);
      setEnd(true);
    }
    return () => {
      clearInterval(currentInterval);
    };
  }, [current]);

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
        <title>TAT Test Set {setNumber}</title>
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
                  ? `/thematic-apperception-test-tat-solution/${setNumber}`
                  : "/premium"
              }
            >
              Stories
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
            <div className="timer">
              <p>
                <label>{minutes < 10 ? `0${minutes}` : minutes}</label>:
                <label>{seconds < 10 ? `0${seconds}` : seconds}</label>
              </p>
            </div>
          </div>
          <div className={styles.tatBody}>
            <div>
              <img
                src={
                  current % 2 === 0
                    ? `/images/tatTest/${setNumber}/tat-even.jpg`
                    : `/images/tatTest/${setNumber}/tat-${current}.jpg`
                }
                alt="SSB TAT - Thematic Apperception Test"
              />
            </div>
            <Link
              className="btn_next"
              to={
                isPremium
                  ? `/thematic-apperception-test-tat-solution/${setNumber}`
                  : "/premium"
              }
            >
              Stories
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TatSetOne;
