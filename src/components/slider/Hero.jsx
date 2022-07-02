import React from "react";
import Social from "../Social";

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "about2.jpeg",
  name: "Antreas Papadopoulos",
  description: `Full stack developer with 3+ years in the Logistics industry but aspiring to
  specialise in Smart Contract development and Web3 applications!`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={`img/hero/${heroContent.shapeImage}`}
            srcSet={`img/myImages/${heroContent.heroImage}`}
            alt="hero image"
          />
        </div>
        <div className="extra">
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            {heroContent.name}
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >

            <a href="cv/Antreas Papadopoulos - CV.pdf" download className="color">
              Download CV
              <i style={{marginLeft:'10px'}} className="fas fa-floppy-disk"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
