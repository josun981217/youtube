import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => {
  const items = props.video.snippet;

  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          src={items.thumbnails.medium.url}
          alt=""
          className={styles.thumbnail}
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{items.title}</p>
          <p className={styles.channel}>{items.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
