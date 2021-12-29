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
      <h2 className="postEdit__title-sub">Title</h2>
      <input type="text" className="postEdit__title-input" />

      <h2 className="postEdit__title-sub">Sub Title</h2>
      <input type="text" className="postEdit__title-input" />

      <h2 className="postEdit__title-sub">Image</h2>
      {postImg && (
        <>
          <img
            src={URL.createObjectURL(postImg)}
            alt=""
            className="postEdit__post-img"
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

      <h2 className="postEdit__title-sub">Content</h2>
      <textarea rows="40" className="postEdit__content-input"></textarea>

      <button className="postEdit__submit-btn" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default PostEdit;
