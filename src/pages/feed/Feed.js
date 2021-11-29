import React from "react";

import { FEED_DATA } from "../../constants/data";
import { GIT_IMG, LIN_IMG, MAIL_IMG, MY_IMG } from "../../constants/image";

import "./Feed.css";

/* TBI Make feed item size responsive to amount of text */
export default class Feed extends React.Component {
  render() {
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
              <img src={LIN_IMG} alt="" className="feed_icon" />
              <img src={GIT_IMG} alt="" className="feed_icon" />
              <img src={MAIL_IMG} alt="" className="feed_icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
