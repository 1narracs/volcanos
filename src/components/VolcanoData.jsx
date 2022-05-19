import React from "react";
import { Container, Table } from "reactstrap";
import styled from "styled-components";

function VolcanoData(props) {
  return (
    <InfoContainer>
      <InfoTable>
        <tr>
          <th>
            <LabelText>Country</LabelText>
          </th>
          <td>
            <InfoText>{props.country}</InfoText>
          </td>
        </tr>
        <tr>
          <th>
            <LabelText>Region</LabelText>
          </th>
          <td>
            <InfoText>{props.region}</InfoText>
          </td>
        </tr>
        <tr>
          <th>
            <LabelText>Subregion</LabelText>
          </th>
          <td>
            <InfoText>{props.subregion}</InfoText>
          </td>
        </tr>
        <tr>
          <th>
            <LabelText>Last Eruption</LabelText>
          </th>
          <td>
            <InfoText>{props.lastEruption}</InfoText>
          </td>
        </tr>
        <tr>
          <th>
            <LabelText>Summit</LabelText>
          </th>
          <td>
            <InfoText>{props.summit}m</InfoText>
          </td>
        </tr>
        <tr>
          <th>
            <LabelText>Elevation</LabelText>
          </th>
          <td>
            <InfoText>{props.elevation}m</InfoText>
          </td>
        </tr>
      </InfoTable>
    </InfoContainer>
  );
}

const LabelText = styled.h3`
  font-size: medium;
  text-decoration: none;
  font-weight: 600;
`;

const InfoText = styled.h4`
  font-size: medium;
`;

const InfoTable = styled(Table)`
  border: 1px #ffffff;
  margin: 0rem;
  position: absolute;
  margin-top: 50%;
  transform: translate(0, -50%);
`;

const InfoContainer = styled(Container)`
    position: relative;
`;

export default VolcanoData;
