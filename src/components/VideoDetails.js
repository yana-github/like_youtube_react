const VideoDetails = (props) => {
    const {search} = props;
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoDetails;