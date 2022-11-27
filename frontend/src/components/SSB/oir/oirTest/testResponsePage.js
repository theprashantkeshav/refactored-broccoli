import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { questions } from "../allTestOIRs";
import "../oir.css";

const TestResponsePage = () => {
  const { setNumber } = useParams();

  var presentSet = questions[setNumber];

  return (
    <div>
      <Helmet>
        <title>OIR Set {setNumber} Solutions</title>
        <link
          rel="canonical"
          href="https://www.troppers.com/service-selection-board-ssb/officer-intelligence-rating-test-oir"
        />
      </Helmet>
      <div className="oir">
        <div className="oir_header">
          <div>
            <Link className="btn_exit" to="/">
              Exit
            </Link>
          </div>
          <div>
            <p>OIR {setNumber[0].toUpperCase() + setNumber.substring(1)}</p>
          </div>
        </div>
        <div className="oirTestResBody">
          {presentSet.map((content, index) => {
            const options = content.options;
            const explanations = content.explanations;

            return (
              <div className="testResponse" key={index}>
                <div className="questionTestResponse">{`${index + 1} - ${
                  content.question
                }`}</div>
                <div className="opsTestResponse">
                  {options.map((option, index) => {
                    return (
                      <ul key={index}>
                        <li>{option}</li>
                      </ul>
                    );
                  })}
                </div>
                <p className="ansTestResponse">ANS - {content.answer}</p>
                <div className="expTestResponse">
                  {explanations.map((explanation, index) => {
                    return (
                      <p key={index}>
                        {index === 0 && "Sol - "}

                        {explanation}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestResponsePage;
