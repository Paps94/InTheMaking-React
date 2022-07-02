import React from "react";

const ProjectModal = (props) => {

  const textFormat = (text) => {
    const formattedText = text.split('\n').map(str => <p>{str}</p>);
    return formattedText;
  }

  console.log(props.projectDetails.tools);
  return (
    <div className="popup_informations">
      
      {/* End big image */}

      <div className="project_info">
        <h1>
          {props.projectDetails.name}
          <img
            className="project-img"
            src={`img/svg/${props.projectDetails.icon}.svg`}
            alt="icon"
          />
        </h1>
        <h3>{props.projectDetails.title}</h3>
        {textFormat(props.projectDetails.description)}
        <hr/>
        <h3>Technology Stack & Tools</h3>
        <ul className="project-tools_list list-unstyled open-sans-font">
          {Object.entries(props.projectDetails.tools).map(([key,value], i) => (
            <li key={i}>
              <span className="title">{key}: </span>
              <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                {value}
              </span>
            </li>
          ))}
        </ul>
        <div className="edina_tm_button">
          <hr/>
          <p style={{textAlign: "center", marginTop: '30px'}}>
            <a style={{marginRight: "20px"}} href={props.projectDetails.gitLink} target="_blank" rel="noreferrer">
              <i class="fa-2x fab fa-github"></i>
            </a>
            {props.projectDetails.link ?
              <a href={props.projectDetails.link} target="_blank" rel="noreferrer">
                <i class="fa-2x fab fa-chrome"></i>
                <i style={{marginLeft: "10px"}} class="fa-2x fab fa-firefox-browser"></i>
              </a>
            : null}
          </p>
          {!props.projectDetails.link ? <p style={{textAlign: "center", margin: "0"}}> **Note will try to set up an actual project page once done with everything else I am wokring on!</p> : null}

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
