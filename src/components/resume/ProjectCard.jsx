import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Modal from "react-modal";
import ProjectModal from "./modal/ProjectModal";

Modal.setAppElement("#root");

const ProjectCard = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  function toggleProjectModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <li className="w-auto" data-aos={props.projectDetails.animation} data-aos-duration="1200">
        <Tilt>
          <div className="list_inner project-card" onClick={toggleProjectModal}>
          <img src={`img/svg/${props.projectDetails.icon}.svg`} alt="icon" />
            <div className="hover">
              <div className="resume_title">
                <h3 className="fw-bolder">{props.projectDetails.name}</h3>
              </div>
              <div className="learn_more">
                Learn More<span></span>
              </div>
            </div>
          </div>
        </Tilt>
      </li>

      {/* Start Modal Motion Graphy */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleProjectModal}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleProjectModal}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ProjectModal projectDetails={props.projectDetails}/>
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Motion Graphy */}
    </>
  );
};

export default ProjectCard;
