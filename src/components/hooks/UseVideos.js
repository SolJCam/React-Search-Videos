import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = () => {
    const [videos, setVideos] = useState([]); 

    useEffect(()=>{  
        onTermSubmit('Video Streaming');
    },[]);

    const onTermSubmit = async term => {  
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        //  console.log(response.data.items);
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };
};

export default useVideos;

