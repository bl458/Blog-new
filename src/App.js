import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader/MainHeader";

import About from "./pages/About";
import Feed from "./pages/Feed";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainHeader />
        <main>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
