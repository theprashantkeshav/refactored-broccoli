import React from "react";
import Navbar from "../../navbar/navbar";
import Title from "../../../custom/Title/Title";
import { faculties } from "./facultyData";
import "./faculty.css";

const Faculty = () => {
  console.log(faculties);

  return (
    <div className="faculty">
      <Navbar />
      <Title title="Faculties" />
      <div className="facultyBody">
        {faculties.map((faculty, index) => {
          return (
            <div key={index} className="facultyCard">
              <div className="facultyImg">
                <img src={`${faculty.img}.jpeg`} alt="faculties" />
              </div>
              <div className="facultyName">
                {" "}
                <h2>{faculty.name}</h2>
              </div>
              <div className="facultyDesc">
                <p>{faculty.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faculty;
