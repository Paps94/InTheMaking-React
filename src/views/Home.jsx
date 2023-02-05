import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/header/Sidebar";
import Hero from "../components/slider/Hero";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import Blog from "../components/blog/Blog";
import Subordinates from "../components/subordinates/Subordinates";
import Address from "../components/Address";
import Swal from 'sweetalert2';

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  document.querySelector("body").classList.remove("rtl");

  // useEffect(() => {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'bottom-right',
  //     showConfirmButton: false,
  //     timer: 5000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener('mouseenter', Swal.stopTimer)
  //       toast.addEventListener('mouseleave', Swal.resumeTimer)
  //     }
  //   });
  //
  //   Toast.fire({
  //     icon: 'info',
  //     title: 'Dark mode available',
  //     text: 'For your viewing pleasure! (Top Right)',
  //   })
  // }, []);


  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };
  return (
    <div
      className={`home-light edina_tm_mainpart ${isDark ? "theme-dark" : ""}`}
    >
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text  fa-solid fa-moon" title="Switch to Dark"></i>
          <i className="dark-text fa-solid fa-sun" title="Switch to Light"></i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}

      <div className="edina_section edina_tm_services" id="projects">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Projects <img src="img/svg/projects.svg" alt="icon" /></h3>
            <p>
              These are some personal projects I am/have been working on. I know they are not perfect or complete but it's the only way
               for me to learn and practice my much needed Web3 skills!
            </p>
          </div>
          {/* End edian_tm_title */}
          <Resume />
        </div>
      </div>
      {/* End Resume*/}

      <div className="edina_section edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog <img src="img/svg/pen-clip.svg" alt="icon" /></h3>
            <p>
                Some people write in diaries ohers keep to themselves... I write on Medium and go through the trouble of showcasing it here! This willl be my professional digital diary on my journey through Web3 and work/life in general!
            </p>
            <Blog />
          </div>
        </div>
      </div>
      {/* End Blog */}

      <div className="edina_section edina_tm_subordinates" id="subordinates">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Subordinates <img src="img/svg/cat.svg" alt="icon" /></h3>
            <p>Pick your fighter! On the left we have Loki, the somehow undefeated champion. On the right giving him a run for his money with have Billie!</p>
          </div>
          <Subordinates />
        </div>
      </div>
      {/* End Resume*/}

      <div className="edina_section edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact <img src="img/svg/contact.svg" alt="icon" /></h3>
            <p>
              If you would like to reach out, please use one of the two options below. Clicking my email address will compose an email for you and clicking my number will promt you to give me a call!
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default Home;
