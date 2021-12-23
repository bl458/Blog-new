import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader/MainHeader";

import Feed from "./pages/feed/Feed";
import PostEdit from "./pages/postEdit/PostEdit";
import Post from "./pages/post/Post";

import "./App.css";

function App(props) {
  return (
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
  );
}

export default App;
