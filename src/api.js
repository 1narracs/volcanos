import { useState, useEffect, useContext } from "react";
import { ResultsContext } from "./ResultsContext";

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
  const [error, setError] = useState(null);
  const [outerResults, setOuterResults] = useContext(ResultsContext);

  useEffect(() => {
    if (!search == []) {
      search.forEach((country) => {
        getVolcanoesByQuery(country)
          .then((results) => {
            setOuterResults((oldRes) => [...oldRes, ...results]);
          })
          .catch((e) => {
            setError(e);
          });
      });
    }
  }, [search]);

  return {
    error,
  };
}
