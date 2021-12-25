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
      <div className="feed__posts">
        {POSTS_DATA.map((post, i) => (
          <div
            className="feed__item"
            key={i}
            onClick={() => onClickFeedItem(post)}
          >
            <div className="feed__title-wrap">
              <h1>{post["title"]}</h1>
              <p className="feed__titleSub">{post["titleSub"]}</p>
              <p>
                {/* TBI */}
                {post["createdAt"].toDateString()}
              </p>
            </div>
            <div className="feed__image-wrap">
              <img src={post["img"]["src"]} alt="" className="feed__image" />
            </div>
          </div>
        ))}
      </div>

      <div className="feed__about">
        <img src={MY_IMG} alt="" />
        <p className="feed_about_txt">CS '22 @ Cornell</p>
        <div className="feed_about_links">
          {/* <button onClick={onClickLIn} className="feed_icon">
            <img src={LIN_IMG} alt="" className="feed_icon_img" />
          </button>
          <button onClick={onClickGit} className="feed_icon">
            <img src={GIT_IMG} alt="" className="feed_icon_img" />
          </button>
          <button onClick={onClickEmail} className="feed_icon">
            <img src={MAIL_IMG} alt="" className="feed_icon_img" />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Feed;
