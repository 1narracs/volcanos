import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "reactstrap";
import { ResultsContext } from "../ResultsContext";

function VolcanoGrid() {
  const [rowData, setRowData] = useState([]);
  const [columns, setColumns] = useState([
    {
      headerName: "Volcano Name",
      field: "name",
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
    },
    {
      headerName: "Region",
      field: "region",
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
    },
    {
      headerName: "Subregion",
      field: "subregion",
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
    },
    {
      headerName: "Country",
      field: "country",
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
    },
    {
      headerName: "id",
      field: "id",
      maxWidth: 100,
      filter: "agNumberColumnFilter",
      filterParams: {
        buttons: ["apply", "cancel"],
        closeOnApply: true,
      },
    },
  ]);
  const [outerResults, setOuterResults] = useContext(ResultsContext);

  useEffect(() => {
    setRowData(outerResults);
  }, [outerResults]);

  const navigate = useNavigate();

  return (
    <SContainer>
      <GridDiv className="ag-theme-alpine-dark">
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={20}
          animateRows={true}
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
  width: 70.5%;
`;

export default VolcanoGrid;
