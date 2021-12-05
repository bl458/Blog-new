import React from "react";
import { useNavigate } from "react-router-dom";

import { POSTS_DATA } from "../../constants/dataConstant";
import {
  GIT_IMG,
  LIN_IMG,
  MAIL_IMG,
  MY_IMG,
} from "../../constants/imageConstant";
import {
  MY_GIT_LINK,
  MY_LIN_LINK,
  MY_EMAIL,
} from "../../constants/miscConstant";

import { openEmail, openInNewTab } from "../../helper/miscHelper";

import "./Feed.css";

/* TBI Make feed item size responsive to amount of text */
/* TBI Work on mobile view */
function Feed(props) {
  const navigate = useNavigate();

  //Onclick
  const onClickFeedItem = (post) => {
    navigate(`/posts/${post["id"]}`, { state: { post } });
  };
  const onClickLIn = () => openInNewTab(MY_LIN_LINK);
  const onClickGit = () => openInNewTab(MY_GIT_LINK);
  const onClickEmail = () => openEmail(MY_EMAIL);

  return (
    <div className="feed">
      <div className="feed_inner">
        <div className="feed_posts">
          {POSTS_DATA.map((post, i) => (
            <div
              className="feed_item"
              key={i}
              onClick={() => onClickFeedItem(post)}
            >
              <div className="feed_title_wrap">
                <p className="feed_title">{post["title"]}</p>
                <p className="feed_titleSub">{post["titleSub"]}</p>
                <p className="feed_createdAt">
                  {/* TBI */}
                  {post["createdAt"].toDateString()}
                </p>
              </div>
              <div className="feed_imgWrap">
                <img src={post["img"]["src"]} alt="" className="feed_img" />
              </div>
            </div>
          ))}
        </div>

        <div className="feed_divider" />

        <div className="feed_about">
          <div className="feed_about_inner">
            <img src={MY_IMG} alt="" className="feed_myImg" />
            <p className="feed_about_txt">CS '22 @ Cornell</p>
            <div className="feed_about_links">
              <button onClick={onClickLIn} className="feed_icon">
                <img src={LIN_IMG} alt="" className="feed_icon_img" />
              </button>
              <button onClick={onClickGit} className="feed_icon">
                <img src={GIT_IMG} alt="" className="feed_icon_img" />
              </button>
              <button onClick={onClickEmail} className="feed_icon">
                <img src={MAIL_IMG} alt="" className="feed_icon_img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
