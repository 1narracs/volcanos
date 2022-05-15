import { React, useContext, useState } from "react";
import { NavbarText } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../UserContext";

function LoginButtons() {
  const [user, setUser] = useContext(UserContext);

  if (user === "FALSE") {
    return (
      <SDiv>
        <SLink to={"/login"}>Login</SLink>
        <SNavbarText>•</SNavbarText>
        <SLink to={"/register"}>Register</SLink>
      </SDiv>
    );
  } else if (user === "TRUE") {
    return (
      <SDiv>
        <SNavbarText>Logged In</SNavbarText>
      </SDiv>
    );
  }
}

const SDiv = styled.div`
  padding: 2rem 0rem;
  margin: 1rem;
`;

const SNavbarText = styled(NavbarText)`
  padding: 0.3rem;
  color: #f38748 !important;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #999999;
  padding: 0.3rem;
  :hover {
    color: #f38748;
  }
`;

export default LoginButtons;
