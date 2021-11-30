import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./components/mainHeader/MainHeader";

import Feed from "./pages/feed/Feed";
import PostEditor from "./pages/PostEditor";
import Post from "./pages/Post";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="app_mainHeader">
            <MainHeader />
          </div>

          <div className="app_main">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/posts/edit" element={<PostEditor />} />
              <Route path="/posts/:postid" element={<Post />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
