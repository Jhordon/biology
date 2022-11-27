import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Respiration } from "./pages/Respiration"
import { Glycolysis } from "./pages/Glycolysis"
import { Oxidation } from "./pages/Oxidation"
import { Krebs } from "./pages/Krebs"
import { Phosphorylation } from "./pages/Phosphorylation"
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Respiration />} />
          <Route path="/glycolysis" element={<Glycolysis />} />
          <Route path="/oxidation" element={<Oxidation />} />
          <Route path="krebs" element={<Krebs />} />
          <Route path="phosphorylation" element={<Phosphorylation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
