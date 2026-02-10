import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LearningPage from "./pages/Learning/LearningPage";
import GamePage from "./pages/Game/GamePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn/:phaseId" element={<LearningPage />} />
          <Route path="/play/:phaseId/:mode" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
