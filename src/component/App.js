import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, searchVideo] = useVideos("关于郑州的回忆");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={searchVideo} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
// state = { videos: [], selectedVideo: null };

// onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video});
// }

// handleFormSubmit = async term => {
//     const response = await youtube.get('/search', {
//         params: {
//             q: term,
//         }
//     });

//     this.setState({
//          videos: response.data.items,
//          selectedVideo: response.data.items[0],
//      });
// }

// componentDidMount () {
//     this.handleFormSubmit('关于郑州的记忆');
// }

// render() {
//     return <div className='ui container'>
//         <SearchBar onTermSubmit={this.handleFormSubmit}/>
//         <div className='ui grid'>
//             <div className='ui row'>
//                 <div className="eleven wide column">
//                     <VideoDetail video={this.state.selectedVideo}/>
//                 </div>
//                 <div className="five wide column">
//                     <VideoList
//                     videos={this.state.videos}
//                     onVideoSelect={this.onVideoSelect}/>
//                 </div>
//             </div>
//         </div>
//     </div>;
// }
// }

export default App;
