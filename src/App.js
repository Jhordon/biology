import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Respiration } from "./pages/Respiration"
import { Glycolysis } from "./pages/Glycolysis"
import { Oxidation } from "./pages/Oxidation"
import { Krebs } from "./pages/Krebs"
import { Phosphorylation } from "./pages/Phosphorylation"
import { Navbar } from "./components/Navbar";
import { useState, createContext } from "react";
import { Home } from "./pages/Home";

export const ImgSource = createContext();

function App() {

  // could pass this in as a prop to components or useContext
  const [source, setSource] = useState("");

  return (
    <div className="App">
      <ImgSource.Provider value={{ source, setSource }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cellresp" element={<Respiration />} />
            <Route path="/glycolysis" element={<Glycolysis />} />
            <Route path="/oxidation" element={<Oxidation />} />
            <Route path="/krebs" element={<Krebs />} />
            <Route path="/phosphorylation" element={<Phosphorylation />} />
          </Routes>
        </Router>
      </ImgSource.Provider>
    </div>
  );
}

export default App;
