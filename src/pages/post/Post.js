import { useLocation } from "react-router-dom";

/* 
  TBI Add scrollup button, flow diagram  
*/
function Post(props) {
  const { state } = useLocation();
  const { post } = state;
  console.log(post);

  return (
    <div className="post">
      <div className="post_inner">
        <p className="post_title">{post["title"]}</p>
        <p className="post_titleSub">{post["titleSub"]}</p>
        <p className="post_createdAt">{post["createdAt"].toDateString()}</p>
        {/* TBI need styled components to make img width dynamic based on aspect ratio */}
        <img src={post["img"]["src"]} alt="" className="post_img" />

        <p className="post_content"></p>
      </div>
    </div>
  );
}

export default Post;
