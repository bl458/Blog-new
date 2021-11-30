import React from "react";

import { FEED_DATA } from "../../constants/dataConstant";
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
export default class Feed extends React.Component {
  render() {
    const openLIN = () => openInNewTab(MY_LIN_LINK);
    const openGit = () => openInNewTab(MY_GIT_LINK);
    const openMyEmail = () => openEmail(MY_EMAIL);

    return (
      <div className="feed">
        <div className="feed_inner">
          <div className="feed_posts">
            {FEED_DATA.map((f, i) => (
              <div className="feed_item" key={i}>
                <div className="feed_title_wrap">
                  <p className="feed_title">{f["title"]}</p>
                  <p className="feed_titleSub">{f["titleSub"]}</p>
                  <p className="feed_createdAt">
                    {/* TBI */}
                    {f["createdAt"].toDateString()}
                  </p>
                </div>
                <div className="feed_img_wrap">
                  <img src={f["img"]["src"]} alt="" className="feed_img" />
                </div>
              </div>
            ))}
          </div>

          <div className="feed_about">
            <div className="feed_myImg_wrap">
              <img src={MY_IMG} alt="" className="feed_myImg" />
              {/* <img src="" alt="" className="feed_myImg" /> */}
            </div>
            <p className="feed_about_txt">CS '22 @ Cornell</p>
            <div className="feed_about_links">
              <button onClick={openLIN} className="feed_icon">
                <img src={LIN_IMG} alt="" className="feed_icon_img" />
              </button>
              <button onClick={openGit} className="feed_icon">
                <img src={GIT_IMG} alt="" className="feed_icon_img" />
              </button>
              <button onClick={openMyEmail} className="feed_icon">
                <img src={MAIL_IMG} alt="" className="feed_icon_img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
