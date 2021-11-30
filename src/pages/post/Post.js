import React from "react";
import { useLocation } from "react-router-dom";

function Post(props) {
  const { state } = useLocation();
  const { post } = state;
  console.log(post);

  return <div>This is a post</div>;
}

export default Post;
