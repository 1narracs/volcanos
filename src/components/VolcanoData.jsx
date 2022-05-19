import React from "react";
import { Container } from "reactstrap";

function VolcanoData(props) {
  return (
    <Container>
      <div>Name: {props.name}</div>
      <div>Country: {props.country}</div>
      <div>Region: {props.region}</div>
      <div>Subregion: {props.subregion}</div>
      <div>last_eruption: {props.lastEruption}</div>
      <div>summit: {props.summit}</div>
      <div>elevation: {props.elevation}</div>
    </Container>
  );
}

export default VolcanoData;
