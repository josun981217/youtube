import { useCallback } from "react";
import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectVideo(video);
  }, []);

  const search = useCallback(
    (query) => {
      setSelectVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideo(videos));
    },
    [youtube]
  );

  const goHome = () => {
    setSelectVideo(null);
    youtube
      .mostPopular() //
      .then((videos) => setVideo(videos));
  };

  useEffect(() => goHome(), []);

  return (
    <div className={styles.app}>
      <Header onSearch={search} goHome={goHome} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
