import styles from "./styles/videoList.module.css";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos, toGetInfo } = props;

  const allVideos = videos.map((video) => (
    <VideoItem key={video.id.videoId} id={video.id} toGetInfo={toGetInfo} />
  ));

  return (
    <div className={styles.listBlock}>
      <h1>Все видео по вашему запросу</h1>
      <div className={styles.allVideos}>{allVideos}</div>
    </div>
  );
};

export default VideoList;
