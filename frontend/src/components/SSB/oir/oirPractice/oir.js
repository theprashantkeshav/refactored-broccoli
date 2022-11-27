import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { questions } from "../allPracticeOIRs";

import "../oir.css";

const OirPractice = () => {
  const { setNumber } = useParams();
  var history = useHistory();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [end, setEnd] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const myInterval = useRef(null);

  var presentSet = questions[setNumber];

  const ans = presentSet[count].answer;
  const ops = presentSet[count].options;
  const explanations = presentSet[count].explanations;

  //? Timer

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
  }, [minutes, seconds, count]);

  function optionSelect(op) {
    if (!showAnswer) {
      if (op === ans) {
        setScore(score + 1);
      }
    }

    setShowAnswer(true);
  }

  function handleEnd() {
    setEnd(true);
    clearInterval(myInterval.current);
  }

  function nextClick() {
    if (count + 1 < presentSet.length) {
      setCount(count + 1);
    } else {
      setEnd(true);
    }

    setShowAnswer(false);
    setShowResponse(false);
  }

  function handleResponse() {
    setShowResponse(!showResponse);
  }

  //? DISPLAYING OPTIONS
  const optionList = ops.map((op, index) => {
    const selectedClass = showAnswer ? (op === ans ? "select" : "wrong") : "";
    return (
      <button
        key={index}
        className={`option ${selectedClass}`}
        onClick={() => optionSelect(op)}
        disabled={showAnswer}
      >
        {op}
      </button>
    );
  });

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
        <title>OIR Practice Set {setNumber}</title>
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
            <p>
              Total Time: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          </div>
          <div className="ins_footer">
            <Link className="btn_next" to="/">
              Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="oir">
          <div className="oir_header">
            <div>
              <p>
                {count + 1}/{presentSet.length}
              </p>
            </div>
            <div>
              <button onClick={handleEnd} className="btn_exit">
                Exit
              </button>
            </div>
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
            <div className="question">
              Q{count + 1}.{presentSet[count].question}
            </div>
            <div className="op_bt">
              <div className="option_group">{optionList}</div>

              <button
                className="response_btn"
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
              {count === presentSet.length - 1 ? (
                <button onClick={handleEnd} className="btn_next">
                  Finish
                </button>
              ) : (
                <button onClick={nextClick} className="btn_next">
                  Next
                </button>
              )}
            </div>
            <div className="OIRResponse">
              {explanations.map((explanation, index) => {
                return <p key={index}>{showResponse ? explanation : null}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OirPractice;
