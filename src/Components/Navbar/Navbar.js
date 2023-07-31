import { React } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Stack, SvgIcon } from "@mui/material";
import { animateScroll as scroll, scroller } from "react-scroll";
import "./Navbar.scss";
import { ReactComponent as IconSvg } from "./tc.svg";
import App from "../../App";

const CustomIcon = (props) => {
  return (
    <SvgIcon fontSize="large" style={{ color: "white"}} {...props}>
      <IconSvg />
    </SvgIcon>
  );
};

const Header = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <section className="section-header">
      
      <AppBar position="sticky" style={{position: "fixed"}}>
        
        <Toolbar className="toolBar">
          <IconButton size="large" edge="start" aria-label="logo">
            <CustomIcon />
          </IconButton>
          <h2>Thomas Chin</h2>
          <Stack className="item-stack" direction="row" spacing={5}>
            <Link
              to="/"
              onClick={() => scrollToElement("aboutMe")}
              className="nav-item"
            >
              About Me
            </Link>
            <Link
              to="/"
              onClick={() => scrollToElement("projects")}
              className="nav-item"
            >
              Projects
            </Link>
            {/* <Link
              to="/"
              onClick={() => scrollToElement("experiences")}
              className="nav-item"
            >
              Experiences
            </Link> */}
            <Link
              to="/"
              onClick={() => scrollToElement("contact-me")}
              className="nav-item"
            >
              Contact
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </section>
  );
};
export default Header;
