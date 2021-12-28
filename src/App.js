import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Feed from "./pages/feed/Feed";
import PostEdit from "./pages/postEdit/PostEdit";
import Post from "./pages/post/Post";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app__main">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/posts/edit" element={<PostEdit />} />
          <Route path="/posts/:postid" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
