import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "reactstrap";
import { isElementType } from "@testing-library/user-event/dist/utils";
import { ResultsContext } from "../ResultsContext";


function VolcanoGrid() {
  const [rowData, setRowData] = useState([]);
  const [rowDataTest, setRowDataTest] = useState([]);
  const [columns, setColumns] = useState([
    { headerName: "Volcano Name", field: "name" },
    { headerName: "Region", field: "region" },
    { headerName: "Subregion", field: "subregion" },
    { headerName: "Country", field: "country" },
    { headerName: "id", field: "id" },
  ]);
  const [outerResults, setOuterResults] = useContext(ResultsContext);

  useEffect(() => {
    console.log("outerResults in VGc", outerResults);
    setRowData(outerResults);
    // outerResults.forEach((countryArray) => {
    //   console.log("countryArray",countryArray);
    //   setRowData(countryArray);
    // });
  }, [outerResults]);

  // useEffect(() => {
  //   console.log("Row Data", rowData);
  //   setRowData(rowData);
  // }, [rowData]);

  const navigate = useNavigate();

  return (
    <SContainer>
      <GridDiv className="ag-theme-balham-dark">
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={20}
          onRowClicked={(row) => navigate(`/volcano?id=${row.data.id}`)}
        />
      </GridDiv>
    </SContainer>
  );
}

const SContainer = styled(Container)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const GridDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 40rem;
  width: 78%;
`;
const StyledGrid = styled(AgGridReact)``;

export default VolcanoGrid;