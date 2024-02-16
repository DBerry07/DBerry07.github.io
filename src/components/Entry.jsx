import content from "../data/content";
import "../css/Entry.css";

function Entry(props) {
  const entryString = props.screen;
  console.log("In Entry=" + entryString);

  const entry = content[entryString];
  const title = entry.title;
  const htmls = entry.htmls;
  const body = entry.body;
  const videos = entry.videos;

  // console.log("Title: " + title);
  // console.log("HTMLs: " + htmls);
  // console.log("Body: " + body);
  return (
    <div id="content-box">
      {console.log("Generating content for tab: " + entryString)}
      <h2>{title}</h2>
      {htmls.map((html) => (
        <a href={html[0]} target="_blank">
          {html[1]}
        </a>
      ))}
      <div>
        <div>
          {videos.map((video, index) => (
            <video class="entry-video" width="320" height="540" controls>
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>
        <div class="entry-body">
          {body.map((item, index) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Entry;
