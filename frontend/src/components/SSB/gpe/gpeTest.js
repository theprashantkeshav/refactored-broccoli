import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { gpeQuestions } from "./allTestContents";
import styles from "../tat/practiceTat.module.css";
import { Helmet } from "react-helmet";

const GPETest = () => {
  const { setNumber } = useParams();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState(0);
  const [end, setEnd] = useState(false);
  const [disappear, setDisappear] = useState(false);

  var contents = gpeQuestions[setNumber];

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          setEnd(true);
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

  //? Content disappearing Interval

  useEffect(() => {
    let disappearInterval = setInterval(() => {
      setDisappear(true);
    }, 300000);

    if (!disappear) {
      setMinutes(5);
    } else {
      setMinutes(10);
    }

    return () => {
      clearInterval(disappearInterval);
    };
  }, [disappear]);

  function handleEnd() {
    setEnd(true);
  }

  return (
    <div>
      <Helmet>
        <title>GPE Test Set {setNumber}</title>
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
            <p>Module Complete.</p>
            {/* <p>Avg Time per slide - {avgTime} minutes</p> */}
          </div>
          <div className="ins_footer">
            <Link className="btn_next" to="/">
              Home
            </Link>
            <Link
              className="btn_next"
              to={
                isPremium
                  ? `/group-planning-exercise-gpe-solution/${setNumber}`
                  : "/premium"
              }
            >
              Solution
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
              <Link
                className="btn_exit"
                to={
                  isPremium
                    ? `/group-planning-exercise-gpe-solution/${setNumber}`
                    : "/premium"
                }
              >
                Solution
              </Link>
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
                src={`/images/gpe/gpeTest/${setNumber}.jpg`}
                alt="SSB TAT - Thematic Apperception Test"
              />
            </div>
            {disappear ? (
              " "
            ) : (
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
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GPETest;
