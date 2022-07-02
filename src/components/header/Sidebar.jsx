

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

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
  const [click, setClick] = useState(false);
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
            <Link to="/">
              <img
                className="logo_dark"
                src={`img/logo/${logo}.png`}
                alt="brand"
              />
              <img
                className="logo_light"
                src={`img/logo/${logo2}.png`}
                alt="brand"
              />
            </Link>
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
