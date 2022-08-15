import React from "react";

const VideoItem = (props) => {
  return (
    <div>
      <h1> {props.video.snippet.title}</h1>
    </div>
  );
};

export default VideoItem;
