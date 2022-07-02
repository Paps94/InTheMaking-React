import React from "react";

const educationContent = [
  {
    year: "Septermber 2015 - June 2018",
    degree: "Computer Science Bsc",
    institute: "University of Liverpool",
    details: `The highlight of my studies was my dissertation which was the replacement of traditional
              rental agreements with smart contracts that govern the rules of the tenancy agreement
              and get rid of rental agencies in the meantime. #getRidOfTheMiddleMan`,
  }
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
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
