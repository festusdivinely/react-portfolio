import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./topbar.css";
import "../../../../app.css";
import {
  WorkOutline,
  DeveloperMode,
  Contacts,
  Menu,
  Close,
} from "@mui/icons-material";

import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  icon: {
    display: "none", // Default display
  },

  "@media (max-width: 768px)": {
    icon: {
      display: "block", // Display when screen width is 768px or less
      zIndex: "100",
    },
  },
}));

function Topbar() {
  const myRef = useRef(null);
  const classes = useStyles();
  const [menuClose, setMenuClose] = useState(true);
  const [dropShow, setDropShow] = useState(false);

  const runMenuClose = () => {
    setMenuClose((prevState) => !prevState); // Toggles the menuClose state
    setDropShow((prevState) => !prevState);
  };

  useEffect(() => {
    const handleSticky = () => {
      const element = myRef.current;
      if (window.scrollY > 100) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky");
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleSticky);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <div className="topbar" ref={myRef}>
      <a href="#" className="logo">
        TechDiv
      </a>
      <div className={`navLinks ${dropShow == false ? "" : "active"}`}>
        <Link
          onClick={runMenuClose}
          className="homeT link"
          to="header"
          spy={true}
          smooth={true}
          offset={50}
          duration={50}
        >
          <DeveloperMode />
          Home
        </Link>

        <Link
          onClick={runMenuClose}
          className="aboutT link"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={50}
        >
          <WorkOutline />
          About
        </Link>

        <Link
          onClick={runMenuClose}
          className="serviceT link"
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={50}
        >
          <Contacts />
          Service
        </Link>
        <Link
          onClick={runMenuClose}
          className="portfolioT link"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={50}
          duration={50}
        >
          <Contacts />
          Porfolio
        </Link>
        <Link
          onClick={runMenuClose}
          className="contactT link"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={50}
        >
          <Contacts />
          contact
        </Link>
      </div>
      <div className={`${classes.icon}`} onClick={runMenuClose}>
        {menuClose == true && dropShow == false ? (
          <Menu className={`hamburgerIcon`} fontSize="large" />
        ) : (
          <Close fontSize="large" />
        )}
      </div>
    </div>
  );
}

export default Topbar;

// note if we didnt use react this is how to activate every section as active when we scroll to IsoTwoTone

// const section = document.querySelectorAll('section')
// const navLink = document.querySelectorAll('header nav a')

// window.onscroll = () => {
//   section.forEach(sec => {
//     let top = window.screenY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height){
//       navLink.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a[href*=' + id +']').classList.add('active')
//       })
//     }
//   })
// }

// The expression ('header nav a[href*=' + id +']') is a JavaScript selector that's used to target anchor (<a>) elements within the navigation menu (<nav>) located in a <header> section of an HTML document. It uses a CSS attribute selector in conjunction with JavaScript variables to dynamically select anchor elements with href attributes that contain a specified id.

// Let's break it down step by step:

// 'header nav a': This part of the selector is a typical CSS selector. It selects all anchor (<a>) elements (<a>) that are descendants of the <nav> element, which, in turn, is a descendant of the <header> element.

// [href*=' + id +']': This part is an attribute selector in CSS. It selects elements where the specified attribute (in this case, href) contains the specified value (in this case, id).

// href is the attribute being checked.
// * is the attribute selector operator. It means "contains." So, [href*='value'] selects elements where the href attribute contains the specified value.
// id is a JavaScript variable that holds a value that you want to use in the attribute selector.
// The combination of these parts in the selector 'header nav a[href*=' + id +']' means "select all anchor elements within the <nav> element within the <header> element that have an href attribute containing the value stored in the id variable."

// This is often used in web development to create scroll-to functionality or highlight navigation links when a specific section of a webpage is in view. By targeting anchor elements with href attributes corresponding to section ids, you can make navigation more interactive and user-friendly.
