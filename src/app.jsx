import { useEffect, useState } from "react";
import "./app.css";
import Nav from "./components/nav";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https:/youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD8hREDHJCoUQQGAegsJyW3m364VZwIubY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="app">
      <Nav />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
