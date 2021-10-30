import {useState, useEffect} from 'react';
import youtube from '../APIs/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]); 

    useEffect(()=>{  
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    const search = async term => {  
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        //  console.log(response.data.items);
        setVideos(response.data.items);
        // setSelectedVideo(response.data.items[0]);
    };

    return [videos, search]
};

export default useVideos;

