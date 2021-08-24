import { useState, useEffect } from "react";
import youtube from "../APIs/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);  
    
    useEffect(() => {
        searchVideo(defaultSearchTerm);
      }, [defaultSearchTerm]);
    
      const searchVideo = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
          },
        });
    
        setVideos(response.data.items);
      };
    
    return [videos, searchVideo];
};

export default useVideos;