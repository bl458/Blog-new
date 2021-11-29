import React from "react";

import "./Feed.css";

export default class Feed extends React.Component {
  render() {
    return (
      <div className="feed">
        <div className="feed_inner">
          <div className="feed_posts">
            <div className="feed_posts_item"></div>
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
