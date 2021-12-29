import { useState } from "react";
import { useLocation } from "react-router-dom";

import { isPostsPath } from "../../helper/miscHelper";

import "./PostEdit.css";

function PostEdit() {
  const { state } = useLocation();
  const { prevPath } = state || {};

  const [postImg, setPostImg] = useState();

  const getTitle = () => {
    if (isPostsPath(prevPath)) {
      return "Edit Post";
    } else {
      return "Create Post";
    }
  };

  const onUploadImg = (event) => {
    setPostImg(event.target.files[0]);
  };

  //TBI
  const onSubmit = () => {};

  return (
    <div>
      <h1 className="postEdit__title">{getTitle()}</h1>
      <h2 className="postEdit__titleSub">Title</h2>
      <input type="text" className="postEdit__titleInput" />

      <h2 className="postEdit__titleSub">Sub Title</h2>
      <input type="text" className="postEdit__titleInput" />

      <h2 className="postEdit__titleSub">Image</h2>
      {postImg && (
        <>
          <img
            src={URL.createObjectURL(postImg)}
            alt=""
            className="postEdit__postImg"
          />
          <br />
          <br />
        </>
      )}
      <input
        type="file"
        name="myImage"
        accept="image/png, image/gif, image/jpeg"
        onChange={onUploadImg}
      />

      <h2 className="postEdit__titleSub">Content</h2>
      <textarea rows="40" className="postEdit__contentInput"></textarea>

      <button className="postEdit__submitBtn" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default PostEdit;
