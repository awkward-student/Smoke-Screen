import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import {
  doLogout,
  getCurrentUser,
  getCurrentUserProfile,
  isLoggedIn,
} from "../auth/auth";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);
  const [stats, setStats] = useState(false);
  // eslint-disable-next-line
  const [userProfile, setUserProfile] = useState(false);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUser());
    setUserProfile(getCurrentUserProfile() === "ROLE_ADMIN");
    setStats(localStorage.getItem("status") != null);
  }, [login, stats]);

  // eslint-disable-next-line
  const performLogout = () => {
    doLogout(() => {
      toast.info("Logged out successfully.");
    });
  };

  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        fixed="top"
        className="px-0 py-2 mb-4"
      >
        <NavbarBrand href="/">
          <img
            className="md"
            alt="logo"
            src={require("../media/nitt-logo.png")}
            style={{
              height: 36,
              width: 36,
              marginRight: 10,
            }}
          />
          <span className="navHead">
            National Institute of Technology, Tiruchirappalli
          </span>
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <Nav navbar>
            {login && (
              <>
                <NavItem>
                  <NavLink>{user.email}</NavLink>
                </NavItem>
              </>
            )}

            {!login && (
              <>
                <NavItem>
                  <NavLink
                    tag={ReactLink}
                    to="/login"
                    disabled={
                      stats &&
                      JSON.parse(localStorage.getItem("status"))[0].status === 0
                    }
                  >
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={ReactLink}
                    to="/register"
                    disabled={
                      stats &&
                      JSON.parse(localStorage.getItem("status"))[1].status === 0
                    }
                  >
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
