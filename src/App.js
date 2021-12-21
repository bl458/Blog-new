import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";

import Feed from "./pages/feed/Feed";
import PostEdit from "./pages/postEdit/PostEdit";
import Post from "./pages/post/Post";

import GlobalStyles from "./components/common/Global";
import { Container } from "./components/common/Container.styled";

const theme = {
  colors: {
    header: "black",
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
        <GlobalStyles />
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/posts/edit" element={<PostEdit />} />
            <Route path="/posts/:postid" element={<Post />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
