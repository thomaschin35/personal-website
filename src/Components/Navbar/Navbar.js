import React, { useState } from "react";
import "./Navbar.scss";
import SvgIcon from "@mui/material/SvgIcon";

import { ReactComponent as IconSvg } from "../../Images/Icon/tc.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection("welcome")}>
        <SvgIcon component={IconSvg} fontSize="large" style={{ color: "white" }} />
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a
          key="resume"
          href="/PDF/ThomasChinOfficialResume.pdf"
          download="ThomasChinOfficialResume.pdf"
        >
          Resume
        </a>
        {["About Me", "Experience", "Projects", "Contact"].map((label) => (
          <a
            key={label}
            onClick={() => scrollToSection(label.toLowerCase().replace(/\s/g, ""))}
          >
            {label}
          </a>
        ))}

      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
