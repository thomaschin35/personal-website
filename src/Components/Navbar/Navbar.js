import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  SvgIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { animateScroll as scroll, scroller } from "react-scroll";
import "./Navbar.scss";
import { ReactComponent as IconSvg } from "./tc.svg";
import App from "../../App";
import MenuIcon from '@mui/icons-material/Menu';

const CustomIcon = (props) => {
  return (
    <SvgIcon fontSize="large" style={{ color: "white" }} {...props}>
      <IconSvg />
    </SvgIcon>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const open = Boolean(mobileMenuOpen);
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className="section-header">
      <AppBar position="sticky" style={{ position: "fixed" }}>
        <Toolbar className="toolBar">
          <IconButton size="large" edge="start" aria-label="logo">
            <CustomIcon />
          </IconButton>
          <h2>Thomas Chin</h2>
          {/* Conditionally render the mobile menu */}
          {window.innerWidth <= 768 ? (
            <>
                <IconButton
                  aria-label="menu"
                  aria-haspopup="true"
                  onClick={toggleMobileMenu}
                  edge="end"
                >
                  <MenuIcon style={{color: "white"}}/>
                </IconButton>
                <Menu
                  anchorEl={mobileMenuOpen}
                  open={Boolean(mobileMenuOpen)}
                  onClose={toggleMobileMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={() => scrollToElement("aboutMe")}>
                    About Me
                  </MenuItem>
                  <MenuItem onClick={() => scrollToElement("projects")}>
                    Projects
                  </MenuItem>
                  <MenuItem onClick={() => scrollToElement("contact-me")}>
                    Contact
                  </MenuItem>
                </Menu>
            </>
          ) : (
            <>
              <Stack className="item-stack" direction="row" spacing={5}>
                {/* Render the regular navbar items for larger screens */}
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
                <Link
                  to="/"
                  onClick={() => scrollToElement("contact-me")}
                  className="nav-item"
                >
                  Contact
                </Link>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </section>
  );
};
export default Header;
