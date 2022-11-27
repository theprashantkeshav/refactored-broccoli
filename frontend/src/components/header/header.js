import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Course from "../course/course";
import Footer from "../footer/footer";
import PremiumTwo from "../PremiumTwo/PremiumTwo";
// import Sale from "../Sales/Sale";
import Testimonials from "../Testimonials/Testimonials";

import { useSelector } from "react-redux";

import styles from "./header.module.css";
import { Helmet } from "react-helmet";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

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

        <title>Troppers - Self-Start Your SSB Preparation.</title>
        <meta
          name="description"
          content="Self-Start Your Service Selelction Board (SSB) Preparation, Practice Officers Intelligence Rating (OIR), Picture Perception & Discussion Test (PPDT), Word Association Test (WAT), Thematic Apperception Test (TAT), Situation Reaction Test (SRT), Group Planning Exercise (GPE), Self Description Test (SDT) And More | Practice and Test Module With Solution."
        />
      </Helmet>

      <div
        className={styles.header}
        style={{
          background: `url("/images/background/background1.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          // height: "100vh",
          // width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        <div className={styles.slogan}>
          <h1>It's only a crazy dream until you achieve it.</h1>
        </div>

        <div className={styles.btns}>
          {isPremium ? (
            <div>
              {" "}
              <Link
                className={styles.btn_p}
                to="/service-selection-board-ssb/practice-module"
              >
                Practice
              </Link>
              <Link
                className={styles.btn_t}
                to="/service-selection-board-ssb/test-module"
              >
                Test
              </Link>
            </div>
          ) : (
            <div>
              {" "}
              <Link className={styles.btn_p} to="/premium">
                Premium
              </Link>
              {/* <Link className={styles.btn_t} to="/guide">
                Guide
              </Link> */}
            </div>
          )}
        </div>
      </div>
      {/* {!isPremium && (
        <div>
          <Sale />
        </div>
      )} */}
      {/* <div>
        <Sale />
      </div> */}
      <div>
        <Course />
      </div>
      <div>{!isPremium && <Testimonials />}</div>
      <div>
        {/* <ComingSoon /> */}
        {!isPremium && <PremiumTwo />}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Header;
