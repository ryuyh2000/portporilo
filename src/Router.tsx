import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GithubPage from "./GIthubPage";
import Menu from "./Menu";

export default () => (
  <Router>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/github/:repo" element={<GithubPage />} />
    </Routes>
  </Router>
);
