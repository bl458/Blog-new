import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import MainHeader from "./components/mainHeader/MainHeader";

import Feed from "./pages/feed/Feed";
import PostEdit from "./pages/postEdit/PostEdit";
import Post from "./pages/post/Post";

import "./App.css";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },

  mobile: {
    width: "768px",
  },
};

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="app">
          <div className="app_mainHeader">
            <MainHeader />
          </div>

          <div className="app_main">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/posts/edit" element={<PostEdit />} />
              <Route path="/posts/:postid" element={<Post />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
