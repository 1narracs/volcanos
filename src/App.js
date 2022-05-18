import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";
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
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
