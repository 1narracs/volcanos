import React from "react";
import { Map, Marker } from "pigeon-maps";
import { Container, Card } from "reactstrap";
import styled from "styled-components";

function VolcanoMap(props) {
  return (
    <MapContainer>
        <Map
          height={400}
          width={800}
          defaultCenter={[props.latitude, props.longitude]}
          defaultZoom={8}
        >
          <Marker
            color={"#f38748"}
            width={50}
            anchor={[props.latitude, props.longitude]}
          />
        </Map>

    </MapContainer>
  );
}

const MapContainer = styled(Container)`
  background-color: aliceblue;
  border-style: groove;
`;


export default VolcanoMap;
