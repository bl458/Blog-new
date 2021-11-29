import React from "react";

import "./Feed.css";

const FEED_DATA = [
  {
    title: "TITLE",
    titleSub: "title sub",
    img: { src: "https://picsum.photos/200/300", width: 200, height: 300 },
    createdAt: new Date("2021-11-29"),
  },
  {
    title: "TITLE2",
    titleSub: "title sub2",
    img: { src: "https://picsum.photos/300/200", width: 300, height: 200 },
    createdAt: new Date("2021-10-20"),
  },
];

export default class Feed extends React.Component {
  render() {
    return (
      <div className="feed">
        <div className="feed_inner">
          <div className="feed_posts">
            {FEED_DATA.map((f, i) => (
              <div className="feed_item" key={i}>
                <div className="feed_title_wrap">
                  <p>{f["title"]}</p>
                  <p>{f["titleSub"]}</p>
                  <p>{f["createdAt"].toDateString()}</p>
                </div>
                <div className="feed_img_wrap">
                  <img src={f["img"]["src"]} alt="" className="feed_img"></img>
                </div>
              </div>
            ))}
          </div>

          <div className="feed_about">
            <img></img>
            <p></p>
            <div className="feed_about_links">
              <img></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
