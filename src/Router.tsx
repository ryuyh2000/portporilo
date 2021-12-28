import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GithubPage from "./GIthubPage";

export default () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/github/:repo" element={<GithubPage />} />
    </Routes>
  </Router>
);
