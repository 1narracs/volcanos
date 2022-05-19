import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import { Container } from "reactstrap";
import VolcanoMap from "../components/VolcanoMap";
import VolcanoData from "../components/VolcanoData";

import PopulationGraph from "../components/PopulationGraph";

const API_URL = "http://sefdb02.qut.edu.au:3001";

export default function Volcano() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const volId = searchParams.get("id"); // Volcano ID
  const url = `${API_URL}/volcano/${volId}`;
  const [user, setUser] = useContext(UserContext);
  const [token, setToken] = useState("");
  const [volcData, setVolcData] = useState({});
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  function CheckError(response) {
    if (!response.error) {
      setLatitude(parseFloat(response.latitude));
      setLongitude(parseFloat(response.longitude));
      return response;
    } else if (response.message === "Invalid JWT token") {
      // Catch incorrect or expired tokens by logging the user out, forcing them to log in again and refresh their token
      navigate(`/logout`);
      throw Error(response.message);
    } else {
      throw Error(response.message);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("token found:", localStorage.getItem("token"));
      setToken(localStorage.getItem("token"));
    } else {
      console.log("no token found");
    }
  }, []);

  useEffect(() => {
    if (!user) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => CheckError(res))
        .then((res) => setVolcData(res))
        .catch((e) => console.log(e));
    } else {
      fetch(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((res) => CheckError(res))
        .then((res) => setVolcData(res))
        .catch((e) => console.log(e));
    }
  }, [token]);

  if (volcData === {}) {
    // Loading state, i.e. volcData state hasn't been udpated yet
    return <div>loading data...</div>;
  } else if (latitude === 0.0 && longitude === 0.0) {
    // Without this, map will render at 0.00, 0.00 (default state) and won't re-render correctly
    return <div>loading map data..</div>;
  } else if (!user) {
    // User isn't logged in, so no token in request header
    console.log(volcData);
    return (
      <Container>
        <VolcanoData
          name={volcData.name}
          country={volcData.country}
          region={volcData.region}
          subregion={volcData.subregion}
          lastEruption={volcData.last_eruption}
          summit={volcData.summit}
          elevation={volcData.elevation}
        />
        <VolcanoMap latitude={latitude} longitude={longitude} />
        <div>latitude: {volcData.latitude}</div>
        <div>longitude: {volcData.longitude}</div>
      </Container>
    );
  } else {
    // User is logged in, token in header and full data rendered on screen
    console.log(volcData);
    return (
      <Container>
        <VolcanoData
          name={volcData.name}
          country={volcData.country}
          region={volcData.region}
          subregion={volcData.subregion}
          lastEruption={volcData.last_eruption}
          summit={volcData.summit}
          elevation={volcData.elevation}
        />
        <VolcanoMap latitude={latitude} longitude={longitude} />
        <div>latitude: {volcData.latitude}</div>
        <div>longitude: {volcData.longitude}</div>
        <PopulationGraph
          text="graph goes here"
          fiveKm={volcData.population_5km}
          tenKm={volcData.population_10km}
          thirtyKm={volcData.population_30km}
          hundredKm={volcData.population_100km}
        ></PopulationGraph>
        <div>population_5km: {volcData.population_5km}</div>
        <div>population_10km: {volcData.population_10km}</div>
        <div>population_30km: {volcData.population_30km}</div>
        <div>population_100km: {volcData.population_100km}</div>
      </Container>
    );
  }
}
