import React from "react";
import Searchbar from "../components/Searchbar";
import VolcanoGrid from "../components/VolcanoGrid";
import { useState } from "react";
import { SearchContext } from "../SearchContext";

function Home() {
  const [outerSearch, setOuterSearch] = useState([]);

  return (
    <div>
      <SearchContext.Provider value={[outerSearch, setOuterSearch]}>
        <Searchbar />
        <VolcanoGrid />
      </SearchContext.Provider>
    </div>
  );
}

export default Home;
