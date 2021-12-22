import { useNavigate } from "react-router-dom";

import { StyledFeed, About, FeedItem } from "./Feed.styled";
import { Flexbox } from "../../components/common/Flexbox.styled";

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

/* TBI Make feed item size responsive to amount of text */
/* TBI Work on mobile view */
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
    <StyledFeed>
      <div>
        {POSTS_DATA.map((post, i) => (
          <FeedItem key={i} onClick={() => onClickFeedItem(post)}>
            <div>
              <h2>{post["title"]}</h2>
              <p>{post["titleSub"]}</p>
              <p>
                {/* TBI */}
                {post["createdAt"].toDateString()}
              </p>
            </div>
            <img src={post["img"]["src"]} alt="" />
          </FeedItem>
        ))}
      </div>

      <About>
        <img src={MY_IMG} alt="" />
        <p>CS '22 @ Cornell</p>
        <div>
          <img src={LIN_IMG} alt="" onClick={onClickLIn} />
          <img src={GIT_IMG} alt="" onClick={onClickGit} />
          <img src={MAIL_IMG} alt="" onClick={onClickEmail} />
        </div>
      </About>
    </StyledFeed>
  );
}

export default Feed;
