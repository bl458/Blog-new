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

function Feed() {
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
      <div className="feed__posts">
        {POSTS_DATA.map((post, i) => (
          <div
            className="feed__item"
            key={i}
            onClick={() => onClickFeedItem(post)}
          >
            <div className="feed__item-title-wrap">
              <h2 className="feed__item-title">{post["title"]}</h2>
              <p className="feed__item-titleSub">{post["titleSub"]}</p>
              <p>
                {/* TBI */}
                {post["createdAt"].toDateString()}
              </p>
            </div>
            <div className="feed__item-image-wrap">
              <img
                src={post["img"]["src"]}
                alt=""
                className="feed__item-image"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="feed__about">
        <div className="feed__my-image-wrap">
          <img src={MY_IMG} alt="" className="feed__my-image" />
        </div>
        <h3>CS '22 @ Cornell</h3>
        <div className="feed__links">
          <img
            src={LIN_IMG}
            alt=""
            className="feed__link-img"
            onClick={onClickLIn}
          />
          <img
            src={GIT_IMG}
            alt=""
            className="feed__link-img"
            onClick={onClickGit}
          />
          <img
            src={MAIL_IMG}
            alt=""
            className="feed__link-img"
            onClick={onClickEmail}
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
