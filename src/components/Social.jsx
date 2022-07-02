import React from "react";

const SocialShare = [
  {
    iconName: <i className="fa-2x fa-brands fa-instagram"></i>,
    link: "https://www.instagram.com/antreas.paps/",
  },
  {
    iconName: <i className="fa-2x fa-brands fa-linkedin"></i>,
    link: "https://www.linkedin.com/in/antreas-papadopoulos-819891158/",
  },
  {
    iconName: <i className="fa-2x fa-brands fa-github"></i>,
    link: "https://github.com/Paps94",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
