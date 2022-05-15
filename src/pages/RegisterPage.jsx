import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const API_URL = "http://sefdb02.qut.edu.au:3001";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");

  function CheckError(response) {
    if (!response.error) {
      return response;
    } else {
      throw Error(response.message);
    }
  }

  function login() {
    setErrorText("");
    const url = `${API_URL}/user/register`;

    return fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((res) => CheckError(res))
      .then((res) => {
        localStorage.setItem("token", res.token);
        navigate("/login/");
      })
      .catch((e) => {
        console.log(e.message);
        setErrorText(e.message);
      });
  }

  return (
    <PageContainer>
      <Row>
        <Col sm="6">
          <h2>Register</h2>
        </Col>
      </Row>
      <FormContainer>
        <Col sm="12">
          <Row>
            <ErrorText>{errorText}</ErrorText>
            <SuccessText>{successText}</SuccessText>
          </Row>
          <form>
            <Row>
              <FormLabels htmlFor="email">Email</FormLabels>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Row>
            <Row>
              <FormLabels htmlFor="password">Password</FormLabels>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Row>
            <Button onClick={login}>Login</Button>
          </form>
        </Col>
      </FormContainer>
    </PageContainer>
  );
}

const PageContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;

const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    max-width: 20rem;
  }
  Button {
    margin: 1rem;
    min-width: 7rem;
    border: none;
    background-color: #212529;
    :hover {
      background-color: #f38748;
      color: #212529;
    }
    :active {
      box-shadow: none !important;
      outline: 0px !important;
      background-color: #fa5c00;
    }
  }
`;
const ErrorText = styled.h3`
  color: red;
`;
const SuccessText = styled.h3`
  color: green;
`;

const FormLabels = styled.label``;

export default LoginPage;
