// import "./videos.css";

export default function Videos(data) {
  var videos = null;

  if (Object.hasOwn(data, "videos")) {
    videos = (
      <div id="video-section">
        {data.videos.map((video, index) => (
          <video className="entry-video" controls key={index}>
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    );
  } else {
    videos = null;
  }

  return videos;
}
