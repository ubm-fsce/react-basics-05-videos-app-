import axios from 'axios';

const KEY = 'AIzaSyD4k5WdurS0FSPjsaDk1HWiw9kPFYUUVMk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  },
});


