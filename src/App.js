import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import Form from "./components/Form";

const url = "https://www.googleapis.com/youtube/v3/";
const myKey = "AIzaSyAFbBjApdlS1hTfSkrfLMSN_5w0PaDuTJU";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);

  const request = (search) => {
    axios
      .get(`${url}search?part=snippet&key=${myKey}&q=${search}&type=video`)
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  useEffect(() => {
    if (selectedVideo !== null) {
      fetchData(selectedVideo);
    }
  }, [selectedVideo]);

  const fetchData = (path) => {
    axios.get(`${path}`).then((response) => {
      const videoDetail = response.data;
      setVideoDetail(videoDetail);
    });
  };

  const toGetInfo = (videoId) => {
    const selectedVideo = videos.filter((video) => {
      if (video.id.videoId === videoId) {
        return video;
      }
      return null;
    });

    setSelectedVideo(selectedVideo[0].url);
  };

  return (
    <div>
      <div><Form request={request} /></div>
      <div>{<VideoList videos={videos} toGetInfo={toGetInfo} />}</div>
      <div>
{/*         {videoDetail && (
        <>
            <VideoDetails videoDetail={videoDetail} url={url} />
          </> 
        )} */}
      </div>
    </div>
  );
};

export default App;
