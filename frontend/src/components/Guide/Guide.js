import React from "react";
import Navbar from "../navbar/navbar";
import "./guide.css";

const Guide = () => {
  return (
    <div className="guide-body">
      <Navbar />
      <div className="guide-content">
        <h1>WHO WE ARE?</h1>
        <ul>
          <li>
            We are a Bunch of Nerds who faced certain obstacles During our SSB
            Preparations.
          </li>
          <li>
            Although there are plenty of Study Materials in the Market We Found
            None that can Offer a Candidate to Test and Self Analyze their
            Capability and Performance.
          </li>
          <li>
            So We Build this Platform that will help Defence Aspirants with
            their Preparations and bring them one step closure to their dream.
          </li>
        </ul>

        <h1>WHAT WE OFFER?</h1>
        <ul>
          <li>
            Our Platform Offers a systematically Designed Interface of SSB
            Procedure With Practice and Test Mode.
          </li>
          <li>
            Practice Mode - You can Use this Mode to Attempt any given Stages of
            SSB at your Own Pace and Self-Analyze Your Capability.
          </li>
          <li>
            Test Mode - This Mode offers an actual Interface that a candidate
            faces at SSB so that you can get Used-to the different Stages of the
            Procedure.
          </li>
          <li>
            Every Set comes with its Solutions Prepared by the Faculty Team of
            Recommended Candidates with good Insight of SSB.
          </li>
          <li>
            You can use these Solutions to Compare with your Own and Analyze and
            Improve Your Performance.
          </li>
          <li style={{ color: "red" }}>
            A Request - We are not Funded by any big Investment or VC, we are
            just a group of Self-funded Enthusiasts. So we will need your help
            and support to Survive and Continue Running this Platform.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Guide;
