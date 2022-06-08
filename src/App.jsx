import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Str from "./Pages/Str/Str";

function App() {
  return (
    <div className="AppMain">
      <Home />
    </div>
  );
}

{
  /* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/str" element={<Str />} />

          
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There is nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter> }

          */
}

export default App;
