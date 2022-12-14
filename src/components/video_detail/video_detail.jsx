import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <div className={styles.metadata}>
      <h2 className={styles.title}>{snippet.title}</h2>
      <h3 className={styles.channel}>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </div>
  </section>
);

export default VideoDetail;
