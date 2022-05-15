import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "reactstrap";
import { isElementType } from "@testing-library/user-event/dist/utils";

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

function VolcanoGrid(props) {
  const [rowData, setRowData] = useState([]);
  const [columns, setColumns] = useState([
    { headerName: "Volcano Name", field: "name" },
    { headerName: "Region", field: "region" },
    { headerName: "Subregion", field: "subregion" },
    { headerName: "Last Erupted", field: "erupted" },
  ]);

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
