import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Navigator from "./components/Navigator";
import { UserContext } from "./UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("FALSE");

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={[ user, setUser ]}>
          <Navigator />
          <Pages />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
