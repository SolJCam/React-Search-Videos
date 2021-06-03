import axios from "axios";

const KEY = 'AIzaSyC6SvI3PeqVy-NpsCZuzyrJ2nYJ2X8jPoQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});