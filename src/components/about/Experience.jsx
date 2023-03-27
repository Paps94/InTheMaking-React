import React from "react";

const experienceContent = [
  {
    year: "   April 2023 - Present",
    position: " Full Stack Web Developer",
    compnayName: "Port of London Authority - London",
    details: `I am the first web developer they hired in an upcoming upscale of their internal systems. Role is more focus towards back-end developerment but
              since I am judge, jury and executioner when it comes to all future projects I get to decide on the tech stacks, architecture and design of each project.
              It's a very exciting oportunity with much to learn!`,
  },
  {
    year: "   March 2019 - April 2023",
    position: " Systems Engineer",
    compnayName: "Customs Clearance Ltd - London",
    details: `Full stack development, maintenance and integration of multiple platforms from legacy to a modern version. I am mostly working on our own PHP 
              Framework but used Laravel for certain smaller projects like a payment platform and admin panels with API integrations for clients like Alibaba and Amazon.. 
              Writting of tests using PHPUnit for smoother push to production. We do not use a front end framework like React or Vue hence why I am learning that on my own 
              free time (This website is written using React).
                `,
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
