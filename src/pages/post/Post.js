import React from "react";
import { useLocation } from "react-router-dom";

import "./Post.css";

/* 
  TBI Add scrollup button, flow diagram  
*/
function Post() {
  const { state } = useLocation();
  const { post } = state;
  console.log(post);

  return (
    <div className="post">
      <h2>{post["title"]}</h2>
      <p className="post__created-at">{post["createdAt"].toDateString()}</p>
      {/* TBI need styled components to make img width dynamic based on aspect ratio */}
      {/* <img src={post["img"]["src"]} alt="" className="post__img" /> */}
      <p>{post["content"]}</p>
    </div>
  );
}

export default Post;
