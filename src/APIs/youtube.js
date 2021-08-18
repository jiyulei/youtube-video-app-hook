import axios from 'axios';
const KEY = 'AIzaSyCqf6Xc9PQz61TnJYiq5hRAVEU3wLOjjm0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    }
});