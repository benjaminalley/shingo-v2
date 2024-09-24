import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import FastMoves from "./components/pages/FastMoves";
import ChargeMoves from "./components/pages/ChargeMoves";
import Navbar from "./components/pages/NavBar";

const App: React.FC = () => {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fast-moves" element={<FastMoves />} />
          <Route path="/charge-moves" element={<ChargeMoves />} />
        </Routes>
      </div>
  );
}

export default App;
