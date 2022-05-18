import { useState, useEffect, useContext } from "react";
import { ResultsContext } from "./ResultsContext";

const API_KEY = process.env.REACT_APP_API_KEY;
const QUERY = {
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
const API_URL = "http://sefdb02.qut.edu.au:3001";

function getVolcanoesByQuery(q) {
  const volcanoesUrl = `${API_URL}/volcanoes?country=${q}`;
  return fetch(volcanoesUrl)
    .then((res) => res.json())
    .then((res) =>
      res.map((volcano) => ({
        name: volcano.name,
        region: volcano.region,
        subregion: volcano.subregion,
        country: volcano.country,
        id: volcano.id,
      }))
    );
}

export function useVolcanoApi(search) {
  const [volcResults, setVolcResults] = useState([]);
  const [error, setError] = useState(null);
  const [outerResults, setOuterResults] = useContext(ResultsContext);
  const [apiRes, setApiRes] = useState([]);

  useEffect(() => {
    if (!search == []) {
      console.log("search received by api.js", search);
      search.forEach((country) => {
        console.log("country queried =>", country);
        getVolcanoesByQuery(country)
          .then((results) => {
            console.log("just before setOuterResults", results);
            setOuterResults(oldRes => [...oldRes, ...results]);
          })
          .catch((e) => {
            setError(e);
          });
      });
    }
  }, [search]);

  return {
    error,
    volcResults,
  };
}
