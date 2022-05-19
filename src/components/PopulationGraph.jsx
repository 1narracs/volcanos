import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function PopulationGraph(props) {
  const ref = useRef();
  const [popData, setPopData] = useState([0, 0, 0, 0]);
  const [labels, setLabels] = useState(["5km", "10km", "30km", "100km"]);

  const dataTemplate = {
    labels: labels,
    datasets: [
      {
        id: 1,
        label: "Population within",
        data: popData,
        backgroundColor: ["#B7AC44", "#DF362D", "#FF8300", "#FF4500"],
      },
    ],
  };

  useEffect(() => {
    setPopData([props.fiveKm, props.tenKm, props.thirtyKm, props.hundredKm]);
    setLabels([
      "5km • " + props.fiveKm,
      "10km • " + props.tenKm,
      "30km • " + props.thirtyKm,
      "100km • " + props.hundredKm,
    ]);
  }, []);

  return (
    <GraphContainer>
      <hr />
      <GraphTitle>Population Data</GraphTitle>
      <Bar ref={ref} datasetIdKey="id" data={dataTemplate} redraw={false} />
    </GraphContainer>
  );
}

const GraphTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const GraphContainer = styled(Container)`
  margin-top: 3rem;
`;

export default PopulationGraph;
