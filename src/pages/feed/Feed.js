import React from "react";

import "./Feed.css";

const FEED_DATA = [
  {
    title: "CSS Is Finally Getting If/Else Statements!",
    titleSub:
      "When I started coding CSS in 2011 (wow) I could never have suspected how much the language would change. I still remember using PIE.htc to…",
    img: { src: "https://picsum.photos/200/200", width: 300, height: 300 },
    createdAt: new Date("2021-11-29"),
  },
  {
    title: "GitHub Commit Bot to Stack Your Contributions Graph",
    titleSub: "How to become the guy she tells you not to worry about",
    img: { src: "https://picsum.photos/300/300", width: 200, height: 200 },
    createdAt: new Date("2021-10-20"),
  },
];

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
                  <img src={f["img"]["src"]} alt="" className="feed_img"></img>
                </div>
              </div>
            ))}
          </div>

          <div className="feed_about">
            <img alt=""></img>
            <p></p>
            <div className="feed_about_links">
              <img alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
