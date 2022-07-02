import React from "react";
import OtherSkills from "../../skills/OtherSkills";
import Achievements from "../Achievements";
import PersonalInfo from "../PersonalInfo";
import Experience from "../Experience";
import Education from "../Education";

const ModalContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-5 mb-5">
          <h3>Personal Info</h3>
          <PersonalInfo />
          <div className="edina_tm_button pull-right">
            <a href="cv/Antreas Papadopoulos - CV.pdf" download className="color">
              Download CV
              <i style={{marginLeft:'10px'}} className="fas fa-floppy-disk"></i>
            </a>
          </div>
        </div>
        {/* End  PersonalInfo */}

        <div className="row resume-box">
          <div className="col-md-12 col-lg-6 col-xl-6">
            <h3>Experience</h3>
            <Experience />
          </div>
          {/* End  Experience */}

          <div className="col-md-12 col-lg-6 col-xl-6">
            <h3>Education</h3>
            <Education />
          </div>
          {/* End  Education */}
        </div>
      </div>
      {/* End .row */}

      <div className="col-12">
        <h3>Web3 Tech Stack and Tools</h3>
        <div className="row">
          <OtherSkills />
        </div>
      </div>
      {/* End  PersonalInfo */}

      <div className="col-12 mt-5 achievements-wrapper">
        <h3>Fun Facts About Me</h3>
        <Achievements />
      </div>
      {/* End  Achievements */}


    </>
  );
};

export default ModalContent;
