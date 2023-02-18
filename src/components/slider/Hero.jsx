import React, { useEffect} from "react";
import Social from "../Social";


const calculateExperience = () => {
  let today = new Date(),
  startDate = new Date('Mar 2019'),
  diff = today.getTime() - startDate.getTime(),
  years = Math.floor(diff / 31556736000);
  return `${years}+ years`;
}

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "about2.jpeg",
  name: "ANTREAS PAPADOPOULOS",
  description: `Full-Stack Developer with ` + calculateExperience() + ` in the Logistics industry. Aspiring to
  specialise in Smart Contract development and Web3 applications!`,
};


const Hero = () => {

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    let target = document.getElementById("target");
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return document.getElementById("target").getAttribute('data-value')[index];
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= document.getElementById("target").getAttribute('data-value').length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 50);
  }, [])
  
  return (
    //    HERO
    <div className="edina_section edina_tm_hero" id="home">
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
            id="target"
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-value={heroContent.name}
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
