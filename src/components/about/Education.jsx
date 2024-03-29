import React from "react";
import education from "../../data/education.json";

const Education = () => {
  return (
    <ul>
      {education.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
