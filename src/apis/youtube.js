import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: API_KEY
  }
});