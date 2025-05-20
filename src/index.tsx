import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import ChampSelect from "../src/pages/champ/ChampSelect";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champ/:id" element={<ChampSelect />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
