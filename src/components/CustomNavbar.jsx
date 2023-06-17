import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const login = false;

const CustomNavbar = () => {
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
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            {login && (
              <>
                <NavItem>
                  <NavLink>Profile</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink>{/* {user.email} */}</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink>Logout</NavLink>
                </NavItem>
              </>
            )}
            {!login && (
              <>
                <NavItem>
                  <NavLink>Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Signup</NavLink>
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
