import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { questions } from "../allTestOIRs";

import "../oir.css";

const OirTest = () => {
  const { setNumber } = useParams();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [score, setScore] = useState(0);
  const [minutes, setMinutes] = useState(17);
  const [seconds, setSeconds] = useState(0);
  // const [clicked, setClicked] = useState(false);
  const [end, setEnd] = useState(false);
  const myInterval = useRef(null);
  const buttonRef = useRef(null);

  var presentSet = questions[setNumber];
  // console.log(presentSet[1].answer);

  //? TIMMER
  useEffect(() => {
    myInterval.current = setInterval(() => {
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
      clearInterval(myInterval.current);
    };
  }, [minutes, seconds]);

  function optionSelect(option, answer, event, index, num) {
    if (option === answer) {
      setScore(score + 1);
    }

    console.log(index);

    event.target.className = "test_select";
  }

  function handleEnd() {
    setEnd(true);
    clearInterval(myInterval.current);
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
        <title>OIR Test Set {setNumber}</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/officer-intelligence-rating-test-oir"
        />
      </Helmet>
      {end ? (
        <div className="instruction">
          <div className="ins_header">
            <h1>Result</h1>
          </div>
          <div className="result_body">
            <p>
              Score: {score}/{presentSet.length}
            </p>
          </div>
          <div className="ins_footer">
            <Link className="btn_next" to="/">
              Home
            </Link>
            <Link
              className="btn_next"
              to={
                isPremium
                  ? `/officer-intelligence-rating-test-oir-solution/${setNumber}`
                  : "/premium"
              }
            >
              Solutions
            </Link>
          </div>
        </div>
      ) : (
        <div className="oir">
          <div className="oir_header">
            <button onClick={handleEnd} className="btn_exit">
              Finish
            </button>
            <div>
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
          <div className="oir_body">
            {presentSet.map(({ question, answer, options }, index) => {
              const num = index + 1;
              return (
                <div key={index}>
                  <div className="question">
                    Q{num}.{question}
                  </div>
                  <div className="option_group">
                    {options.map((option, index) => {
                      return (
                        <button
                          key={index}
                          className={`option_test`}
                          // className="option_test"
                          onClick={(event) =>
                            optionSelect(option, answer, event, index, num)
                          }
                          ref={buttonRef}
                          // disabled={clicked}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <Link
              className="response_btn"
              to={
                isPremium
                  ? `/officer-intelligence-rating-test-oir-solution/${setNumber}`
                  : "/premium"
              }
            >
              Solutions
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OirTest;
