

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";
import Swal from 'sweetalert2';

// logo name
const logo = "logo1";
const logo2 = "logo2";

// sidebar content
const sidebarContent = [
  { icon: "house", itemName: "Home", itemRoute: "#home", activeClass: "active" },
  { icon: "about", itemName: "About", itemRoute: "#about", activeClass: "" },
  { icon: "code", itemName: "Projects", itemRoute: "#projects", activeClass: "",},
  { icon: "pen-clip", itemName: "Blog", itemRoute: "#blog", activeClass: "" },
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
  const [merakiClicked, setmerakiClicked] = useState(false);
  const [click, setClick] = useState(false);

  const handleMerakiClick = () => {
    Swal.fire({
      title: '<strong>What is <u>Meraki</u>?</strong>',
      width: 800,
      padding: '20px',
      html:
        'Meraki started as an idea and is currently a registed company.<br> <br>This will be my next personal project which I hope to eventually integrate with Web3 and govern its logic through Smart Contracts. ' +
        'It\'s my familys personal project to promote the ongoing digitalisation of Cyprus in an attempt to turn it into an information technology provider. <br><br>' +
        'That is all I can share for the time being unfortunately :p',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        ' Cool beans! <i class="fa fa-thumbs-up"></i>',
      confirmButtonAriaLabel: 'Niceee!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
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
            <img className="hero_image_small aos-init aos-animate" data-aos-anchor=".experience" data-aos="fade-down-left" data-aos-duration="1200" data-aos-delay="200" src={`${sidebarFooterContent.avatar}`} alt="my face"/>
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "projects",
                "blog",
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
