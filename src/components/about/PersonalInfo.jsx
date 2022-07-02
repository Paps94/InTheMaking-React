import React from "react";

const PersonalInfo = () => {

  const calculateAge = () => {
    //milliseconds in a year 1000*24*60*60*365.24 = 31556736000;
    let today = new Date(),
    //birthay has 'Dec 25 1998'
    dob = new Date('Oct 7 1994'),
    //difference in milliseconds
    diff = today.getTime() - dob.getTime(),
    //convert milliseconds into years
    years = Math.floor(diff / 31556736000),
    //1 day has 86400000 milliseconds
    days_diff = Math.floor(diff % 31556736000 / 86400000),
    //1 month has 30.4167 days
    months = Math.floor(days_diff / 30.4167);
    return `${years} years ${months} months old`;
  }

  const calculateExperience = () => {
    //milliseconds in a year 1000*24*60*60*365.24 = 31556736000;
    let today = new Date(),
    //birthay has 'Dec 25 1998'
    dob = new Date('Mar 4 2019'),
    //difference in milliseconds
    diff = today.getTime() - dob.getTime(),
    //convert milliseconds into years
    years = Math.floor(diff / 31556736000),
    //1 day has 86400000 milliseconds
    days_diff = Math.floor(diff % 31556736000 / 86400000),
    //1 month has 30.4167 days
    months = Math.floor(days_diff / 30.4167);
    return `${years} years ${months} months (Full Stack Developer)`;
  }

  const personalInfoContent = [
    { meta: "first name", metaInfo: "Antreas" },
    { meta: "last name", metaInfo: "Papadopoulos" },
    { meta: "Age", metaInfo: calculateAge() },
    { meta: "Experience", metaInfo: calculateExperience() },
    { meta: "Nationality", metaInfo: "Cyprus" },
    { meta: "Notice period", metaInfo: "1 Month" },
    { meta: "Address", metaInfo: "London" },
    { meta: "Phone", metaInfo: "+44 7999 435 635" },
    { meta: "Email", metaInfo: "antreas.paps@yahoo.com" },
    { meta: "Languages", metaInfo: "English, Greek" },
  ];

  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
