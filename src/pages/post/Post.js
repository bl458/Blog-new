import { useLocation } from "react-router-dom";
import parser from "bbcode-to-react";

import "./Post.css";

/* 
  TBI Add scrollup button, flow diagram  
*/
function Post() {
  const { state } = useLocation();
  const { post } = state || {};

  return (
    <div className="post">
      <h2>{post["title"]}</h2>
      <p className="post__title-sub">{post["titleSub"]}</p>
      <p className="post__created-at">{post["createdAt"].toDateString()}</p>
      {/* TBI need styled components to make img width dynamic based on aspect ratio */}
      {/* <img src={post["img"]["src"]} alt="" className="post__img" /> */}
      <p>{parser.toReact(post["content"])}</p>
    </div>
  );
}

export default Post;
