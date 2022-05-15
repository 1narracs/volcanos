import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API_URL = "http://sefdb02.qut.edu.au:3001";

function Searchbar() {
  const [input, setInput] = useState("");
  const [formattedInput, setFormattedInput] = useState("");
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  const countriesUrl = `${API_URL}/countries`;

  function cleanInput(dirtyInput) {
    setFormattedInput(dirtyInput.replace(/[0-9]/g, ""));
  }

  const submitHandler = (e) => {
    e.preventDefault();

    cleanInput(input);

    if (countries.includes(formattedInput)) {
      console.log(formattedInput);
      console.log("search accepted");
    } else {
      console.log(formattedInput);
      console.log("search not accepted");
    }
    // if input != what's on list of countries (regex format input properly i.e caps, remove numbers etc)
    // then say there are no results
    // else render list of volcanoes matching this term
    // then send props to the grid component that is just the innerRowData
  };

  function CheckError(response) {
    if (!response.error) {
      return response;
    } else {
      throw Error(response.message);
    }
  }

  useEffect(() => {
    fetch(countriesUrl)
      .then((res) => res.json())
      .then((res) => CheckError(res))
      .then((res) => {
        setCountries(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <h2>Search the VolcanoDB by country</h2>
      </div>
      <div>
        <FaSearch />
        <input
          type="text"
          id="search"
          value={input}
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    margin: 2rem;
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: #212529;
    font-size: 1.5rem;
    color: #f38748;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #f38748;
  }
  h2 {
    color: #212529 !important;
    text-align: center;
    font-weight: 500;
  }
`;

export default Searchbar;
