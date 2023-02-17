

import React, { useState, useEffect } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import Swal from 'sweetalert2';

// logo name
const logo = "tab_logo";
const logo2 = "tab_logo_white";

// sidebar content
const sidebarContent = [
  { icon: "house", itemName: "Home", itemRoute: "#home", activeClass: "active" },
  { icon: "about", itemName: "About", itemRoute: "#about", activeClass: "" },
  { icon: "code", itemName: "Projects", itemRoute: "#projects", activeClass: "",},
  { icon: "pen-clip", itemName: "Blog", itemRoute: "#blog", activeClass: "" },
  { icon: "cat", itemName: "Subordinates", itemRoute: "#subordinates", activeClass: "" },
  { icon: "contact",    itemName: "Contact",    itemRoute: "#contact",    activeClass: "",  },
];

// sidebar footer bottom content
const sidebarFooterContent = {
  avatar: "img/myImages/about.jpeg",
  name: "Antreas",
  email: "antreas.paps@yahoo.com",
  emailRef: "mailto:antreas.paps@yahoo.com?subject=Contact forms in websites should be banned!",
};

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Image is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const handleMerakiClick = () => {
    Swal.fire({
      title: '<strong>What is <u>Meraki</u>?</strong>',
      width: 800,
      padding: '20px',
      html:
        'The Greek lettter \'μ\' in an abbreviation for \'Meraki\' which by definition is: [may-rah-kee] (adjective) A word that modern Greeks often use to describe doing something with soul, creativity, or love. <br><br>' +
        'This will be my next personal project which I hope to eventually integrate with Web3 and govern its logic through Smart Contracts. <br><br>' +
        'The basic idea is co-living for digital nomads and young professionals. <br><br>' +
        'That is all I can share for the time being unfortunately :p',
      showCloseButton: true,
      confirmButtonColor: '#34495e',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Cool beans',
      confirmButtonAriaLabel: 'Niceee!',
      cancelButtonText:
        'Not cool beans',
      cancelButtonAriaLabel: 'Whatever..'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          width: 0,
          height: 0,
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          backdrop: `
            rgba(0,0,0,0.4)
            url(${
              process.env.PUBLIC_URL + '/img/memes/peepo-dance-pepe.gif'
            })
            center right
            no-repeat
          `
        })
      } else {
        Swal.fire({
          width: 0,
          height: 0,
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          backdrop: `
            rgba(0,0,0,0.4)
            url(${
              process.env.PUBLIC_URL + '/img/memes/peepo-leave-leaving.gif'
            })
            center right
            no-repeat
          `
        })
      }
    });
  };

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}
      <div
        className={click ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
              <img
                onClick={handleMerakiClick}
                className="logo_dark"
                src={`img/logo/${logo}.png`}
                alt="brand"
              />
              <img
                onClick={handleMerakiClick}
                className="logo_light"
                src={`img/logo/${logo2}.png`}
                alt="brand"
              />
              {isVisible && (<img className="hero_image_small" data-aos="zoom-in" data-aos-duration="1200"src={`${sidebarFooterContent.avatar}`} alt="my face"/>)}
            
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "projects",
                "blog",
                "subordinates",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          className="svg custom"
                          src={`img/svg/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + sidebarFooterContent.avatar
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
