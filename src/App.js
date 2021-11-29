import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader/MainHeader";

import Feed from "./pages/Feed";
import PostEditor from "./pages/PostEditor";
import Post from "./pages/Post";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainHeader />
        <main>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/posts/edit" element={<PostEditor />} />
            <Route path="/posts/:postid" element={<Post />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
