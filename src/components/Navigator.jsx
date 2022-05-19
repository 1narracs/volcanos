import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { WiVolcano } from "react-icons/wi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginButtons from "./LoginButtons";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { UserContext } from "../UserContext";

function Navigator() {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Navi>
          <Logo to={"/"}>
            <WiVolcano />
            VolcanoDB
          </Logo>
        </Navi>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <SLink to={"/"}>Full List</SLink>
            </NavItem>
            <NavItem>
              <SLink to={"/"}>Wiki</SLink>
            </NavItem>
          </Nav>
          <LoginButtons />
        </Collapse>
      </Navbar>
    </div>
  );

  // return (
  //   <Nav>
  //     <Logo to={"/"}>
  //       <WiVolcano />
  //       VolcanoDB
  //     </Logo>
  //   </Nav>
  // );
}

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  :hover {
    color: #f38748;
  }
`;
const Navi = styled(NavItem)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0rem 2rem;
  svg {
    font-size: 5rem;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #999999;
  padding: 0.3rem;
  :hover {
    color: #f38748;
  }
`;
export default Navigator;
