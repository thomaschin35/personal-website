import { React } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import "./Navbar.scss";
import App from "../../App";


const Header = () => (
  <section className="section-header">
    <AppBar position="static">
      <Toolbar className="toolBar">
        <IconButton size="large" edge="start"  aria-label="logo">
          {/* insert icon */}
        </IconButton>
        <h2>Thomas Chin</h2>
        <Stack className="item-stack" direction="row" spacing={5}>
          <Link exact to={`/#AboutMe`} className="nav-item">
            About Me
          </Link>
          <Link exact to={`/#AboutMe`} className="nav-item">
            About Me
          </Link>
          <Link exact to={`/#AboutMe`} className="nav-item">
            About Me
          </Link>
          <Link exact to={`/#AboutMe`} className="nav-item">
            About Me
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  </section>
);
export default Header;
