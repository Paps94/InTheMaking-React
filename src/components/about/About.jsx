import React, { useState } from "react";
import Skills from "../skills/Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";
import skills from "../../data/skills.json";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const calculateExperience = () => {
    let today = new Date(),
    startDate = new Date('Mar 2019'),
    diff = today.getTime() - startDate.getTime(),
    years = Math.floor(diff / 31556736000);
    return `${years}+ Years`;
  }

  return (
    //    ABOUT
    <div className="edina_section edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me  <img src="img/svg/about.svg" alt="icon" /></h3>
        </div>

        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I'm <span>Antreas Papadopoulos</span>
              </h3>
              <p>
                I'm a full stack developer with a sweet tooth for blockchain technologies.
                Originally from Cyprus but I'm currently living with my 2 rescued cats,<span id="Loki"> Loki</span> and <span id="Billie">Billie</span> in London.
                I started with back end web development and moved to full stack applications
                after I landed my first job. During my free time I try to work on projects for self
                development. Currently, these are Web3 related to learn Solidity and familiarise myself
                with the development process and technology stack of blockchain applications.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">What I am working with / learning:</h3>
              <p className="desc">
                These are languages (including some libraries) and frameworks I worked with, or
                I'm currently learning through projects.
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  {skills.map((val, i) => (
                    <Skills key={val.key} name={val.name} skillPercent={val.skillPercent} />
                  ))}
                </div>
              </div>
              <div className="edina_tm_button">
                <button type="submit" onClick={toggleModalOne}>
                  More About Me
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "img/myImages/profile.jpeg"
                  })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>{ calculateExperience() }</h3>
                  <span>Of Experience</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
