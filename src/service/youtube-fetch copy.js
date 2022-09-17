import axios from "axios";

class YoutubeFetch {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https:/youtube.googleapis.com/youtube/v3/",
      params: { key: key },
    });
  }

  async mostPopular() {
    const reseponse = await this.youtube.get("video", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return reseponse.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      part: "snippet",
      maxResults: 25,
      q: query,
      type: "video",
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
