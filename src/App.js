import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Feed from "./pages/Feed";
import MainHeader from "./components/MainHeader";

import "./style/App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <MainHeader />
        <main>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
