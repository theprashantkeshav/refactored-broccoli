import React, { Fragment, useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../tat/practiceTat.module.css";
import "./sd.css";

const Sd = () => {
  var history = useHistory();
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [end, SetEnd] = useState(false);
  const itemRef = useRef();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          SetEnd(true);
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

  function handleResponse() {
    setShowResponse(!showResponse);
    if (!itemRef.current) return;
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Fragment>
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
        <title>Self Description</title>

        <link
          rel="canonical"
          href="https://www.troppers.com/self-description-test-sdt/instruction"
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
          </div>
        </div>
      ) : (
        <div className={styles.tat}>
          <div className={styles.tatHeader}>
            <div>
              <Link className="btn_exit" to="/">
                Exit
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
            <div className="sd-content">
              <div className="q">
                <p>Q. What is the opinion of the following about you?</p>
              </div>
              <div className="q-content">
                <p>1. Parents/Guardian.</p>
                <p>2. Friends.</p>
                <p>3. Teachers/Superiors.</p>
                <p>4. Self opinion.</p>
              </div>
              <div className="q">
                <p>Q. Qualities a candidate would like to develop/inculcate.</p>
              </div>
            </div>
            <div>
              <button
                className={styles.WATresponseBtn}
                onClick={() =>
                  isPremium ? handleResponse() : history.push("/premium")
                }
              >
                Answer
              </button>
              <div className={styles.gpeContent} ref={itemRef}>
                {showResponse && (
                  <div className={styles.GPEResponse}>
                    <h3 style={{ textAlign: "justify" }}>
                      Parents/Guardian:-{" "}
                    </h3>
                    <p>
                      My parents have a very good level of trust in me and
                      consider me the second in charge of the house after dad.
                      They consider me as an honest and responsible child with a
                      good amount of Patience and Skills. They respect my
                      opinion and often approach me for advice on important
                      family decisions. They sometimes recommend me to sleep
                      early as I am a night owl.
                    </p>
                    <h3>Friends:- </h3>
                    <p>
                      My friends consider me a very humorous and lively person.
                      They love me for being loyal, polite, and helpful towards
                      them. They call me their go-to person and find me
                      trustworthy to discuss any matter or problem and take
                      opinions on important issues. They think I am bad at
                      keeping secrets and don’t often tell me theirs.
                    </p>
                    <h3>Teachers/Superiors:- </h3>
                    <p>
                      My teachers/Superiors believe that I am a smart, Sincere
                      and hardworking person who can excel in anything once I
                      put my mind to it. They rest their faith in me regarding
                      the completion of any task and often shoulder me with
                      responsibilities of organizing events and plans. They find
                      me good at team activities. Sometimes they think I could
                      be over-competitive and suggest taking things easy.
                    </p>
                    <h3>Self:- </h3>
                    <p>
                      I see myself as a calm and determined person who always
                      tries to keep a positive attitude towards life. Courage
                      and patience are my biggest strength in life, and I don't
                      back down from any challenges life throws at me and never
                      let my failure distract me from my path. I try to stay
                      calm in difficult situations and at the same time, I tend
                      to overthink before doing any task because I want it to be
                      done perfectly.
                    </p>
                    <h3>Aim In Life/ Qualities would like to inculcate:- </h3>
                    <p>
                      My ambition in life is to become a soldier in the Indian
                      Defence forces and serve the Nation with the highest honor
                      and make my parents proud. I would like to live an
                      independent and peaceful life and become a role model for
                      someone. I always want to keep learning new things in life
                      and take failure as a step one for success. I also aim to
                      be an expert in my area and guide people with their
                      problems.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Sd;
