import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import * as React from "react";

import { Home} from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import {CompareCostOfLiving} from "./pages/cost-of-living";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cost-of-living" element={<CompareCostOfLiving />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
