import axios from 'axios';

const KEY = 'dkasjfdal;ksjf;klajdsklja;lf';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  },
});


