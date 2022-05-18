import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ResultsContext } from "../ResultsContext";
import { Toast, ToastHeader, ToastBody } from "reactstrap";
import { useVolcanoApi } from "../api";

const API_URL = "http://sefdb02.qut.edu.au:3001";

function Searchbar() {
  const [input, setInput] = useState("");
  const [innerResults, setInnerResults] = useState([]);
  const [countries, setCountries] = useState([]);
  const [placeholderText, setPlaceholderText] = useState(
    "Connecting to the API server..."
  );
  const [disableSearch, setDisablesearch] = useState(true);
  const countriesUrl = `${API_URL}/countries`;
  const resultsExpr = new RegExp(input, "gi");
  const [toastState, setToastState] = useState(false);
  const [search, setSearch] = useState([]);
  const [outerResults, setOuterResults] = useContext(ResultsContext);
  const { volcResults, error } = useVolcanoApi(search);
  const submitHandler = (e) => {
    e.preventDefault();

    console.log("innerResults", innerResults);

    setInput("");

    setOuterResults([]);

    if (innerResults.length > 0) {
      setSearch(innerResults);
      setToastState(false);
    } else {
      setToastState(true);
    }
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
      .then(() => {
        setPlaceholderText("Enter a country...");
        setDisablesearch(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  useEffect(() => {
    if (!input == "") {
      console.log("input", input);
      setInnerResults(countries.filter((elem) => resultsExpr.test(elem)));
    }
  }, [input]);

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
          disabled={disableSearch}
          placeholder={placeholderText}
          onChange={(e) => {
            setInput(e.target.value.replace(/\s*[^a-z\s].*$/gi, ""));
            // setInnerResults(
            //   countries.filter((elem, index) => resultsExpr.test(elem))
            // );
          }}
        />
      </div>
      <NoResultsToast isOpen={toastState}>
        <ToastHeader>No results match your query...</ToastHeader>
      </NoResultsToast>
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

const NoResultsToast = styled(Toast)`
  background-color: #212529;
  color: #f38748;
  border-radius: 1.5rem;
  margin: 0.3rem;
  div.toast-header {
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;
    background-color: #212529 !important;
    color: #f38748;
  }
`;


export default Searchbar;
