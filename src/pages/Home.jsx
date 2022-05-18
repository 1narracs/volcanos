import React from "react";
import Searchbar from "../components/Searchbar";
import VolcanoGrid from "../components/VolcanoGrid";
import { useState } from "react";
import { ResultsContext } from "../ResultsContext";

function Home() {
  const [outerSearch, setOuterSearch] = useState([]);

  return (
    <div>
      <ResultsContext.Provider value={[outerSearch, setOuterSearch]}>
        <Searchbar />
        <VolcanoGrid />
      </ResultsContext.Provider>
    </div>
  );
}

export default Home;
