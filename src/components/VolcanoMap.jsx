import React from "react";
import { Map, Marker } from "pigeon-maps";
import { Container } from "reactstrap";

function VolcanoMap(props) {
  return (
    <Container>
      <Map
        height={300}
        width={600}
        defaultCenter={[props.latitude, props.longitude]}
        defaultZoom={8}
      >
        <Marker color={"#f38748"} width={50} anchor={[props.latitude, props.longitude]} />
      </Map>
    </Container>
  );
}

export default VolcanoMap;
