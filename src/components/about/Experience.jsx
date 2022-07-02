import React from "react";

const experienceContent = [
  {
    year: "   March 2019 - Present",
    position: " Systems Engineer",
    compnayName: "Customs Clearance Ltd - London",
    details: `  Full stack development and maintenance of multiple platforms and integrations through APIs with big clients like Alibaba and Amazon.
                I am mostly working on our own PHP Framework but used Laravel for certain smaller projects.`,
  },
  {
    year: "August 2018 - January 2019",
    position: "Creative Internship",
    compnayName: "zzDot - Athens",
    details: `I worked with both the IT team and the creative teams to bring client projects to life. Mostly worked with pure PHP and JavaScript
              as IT solutions were very simple; usually a one page website(s).`,
  },
  {
    year: "July 2013 - July 2015",
    position: "Special Forces Commando",
    compnayName: "Military service - Cyprus",
    details: ` I worked in a select team to carry out drills and practice scenarios. I was taught to be quick on my feet and think outside the box, as well as overcome mental and physical obstacles.`,
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
