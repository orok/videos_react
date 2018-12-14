import axios from "axios";
const KEY = "AIzaSyDdRXAL_ScI8HgKsGeVFlaSSt2dIgu5tVk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
