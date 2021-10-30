import React from "react";
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('MCU');
    }

    onTermSubmit = async term => {  
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        //  console.log(response.data.items);
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={ this.onTermSubmit } />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video= { this.state.selectedVideo } />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={ this.onVideoSelect } videos={ this.state.videos } />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
// const App = () => {
//     const [videos, setVideos] = useState([]); 
//     const [selectedVideo, setSelectedVideo] = useState(null); 

//     useEffect(()=>{  
//         onTermSubmit('Video Streaming');
//     },[]);

//     const onTermSubmit = async term => {  
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });

//         //  console.log(response.data.items);
//         setVideos(response.data.items);
//         setSelectedVideo(response.data.items[0]);
//     };

//     return(
//         <div className="ui container">
//             <SearchBar onFormSubmit={ onTermSubmit } />
//             <div className="ui grid">
//                 <div className="ui row">
//                     <div className="eleven wide column">
//                         <VideoDetail video= { selectedVideo } />
//                     </div>
//                     <div className="five wide column">
//                         <VideoList onVideoSelect={ setSelectedVideo } videos={ videos } />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default App;