import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "reactstrap";
import { isElementType } from "@testing-library/user-event/dist/utils";
import { SearchContext } from "../SearchContext";

const TEST_QUERY = {
  id: 1,
  country: "Japan",
  region: "Japan, Taiwan, Marianas",
  subregion: "Honshu",
  last_eruption: "6850 BCE",
  summit: 641,
  elevation: 2103,
  latitude: 34.5,
  longitude: 131.6,
  population_5km: 3597,
  population_10km: 9594,
  population_30km: 117805,
  population_100km: 4071152,
};

const API_URL = "http://sefdb02.qut.edu.au:3001";

function VolcanoGrid(props) {
  const [rowData, setRowData] = useState([]);
  const [columns, setColumns] = useState([
    { headerName: "Volcano Name", field: "name" },
    { headerName: "Region", field: "region" },
    { headerName: "Subregion", field: "subregion" },
    { headerName: "Last Erupted", field: "erupted" },
    { headerName: "id", field: "id" },
  ]);
  const [outerSearch, setOuterSearch] = useContext(SearchContext);

  const [outerResults, setOuterResults] = useState([]);

  function getVolcanoesByQuery(q) {
    const volcanoesUrl = `${API_URL}/volcanoes?country=${q}`;
    return fetch(volcanoesUrl)
      .then((res) => res.json())
      .then((res) =>
        res.map((volcano) => ({
          id: volcano.id,
          name: volcano.name,
          country: volcano.country,
          region: volcano.region,
          subregion: volcano.subregion,
        }))
      )
      .then((res) => {
        setOuterResults([...outerResults, res]);
        console.log("Outer Results", outerResults);
      });
  }

  useEffect(() => {
    console.log(outerSearch);
    outerSearch.forEach((country) => {
      getVolcanoesByQuery(country);
    });
  }, [outerSearch]);

  useEffect(() => {
    setRowData(outerResults);    
  }, [outerResults]);

  const navigate = useNavigate();

  return (
    <SContainer>
      <GridDiv className="ag-theme-balham-dark">
        <AgGridReact columnDefs={columns} rowData={rowData} />
      </GridDiv>
    </SContainer>
  );
}

const SContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GridDiv = styled.div`
  min-height: 10rem;
  height: 20rem;
  width: 51rem;
`;
const StyledGrid = styled(AgGridReact)``;

export default VolcanoGrid;
