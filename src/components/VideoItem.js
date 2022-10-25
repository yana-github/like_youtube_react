import styles from "./styles/videoItem.module.css";

const VideoItem = (props) => {
  const {id, toGetInfo } = props;
  return (
    <iframe
      width="560"
      height="315"
      src ={"https://www.youtube.com/embed/" + id.videoId}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
};

export default VideoItem;