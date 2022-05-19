import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function PopulationGraph(props) {
  const ref = useRef();
  const [popData, setPopData] = useState([0, 0, 0, 0]);

  const dataTemplate = {
    labels: ["5km", "10km", "30km", "100km"],
    datasets: [
      {
        id: 1,
        label: "Population within",
        data: popData,
        backgroundColor: [
            '#B7AC44',
            '#DF362D',
            '#FF8300',
            '#FF4500',
        ]
      },
    ],
  };

  useEffect(() => {
    setPopData([props.fiveKm, props.tenKm, props.thirtyKm, props.hundredKm]);
  }, []);

  return (
    <Container>
      {props.text}
      <Bar ref={ref} datasetIdKey="id" data={dataTemplate} redraw={false} />
    </Container>
  );
}

export default PopulationGraph;
