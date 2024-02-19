import content from "../data/constants/content.js";
import "../css/Entry.css";

function Entry({ tab, children }) {
  console.log("In Entry = " + tab);
  const data = content[tab];

  const title = data.title;
  const htmls = data.htmls;
  const body = data.body;
  const videos = data.videos;

  // console.log("Title: " + title);
  // console.log("HTMLs: " + htmls);
  // console.log("Body: " + body);
  return (
    <div id="content-box">
      {console.log("Generating content for tab: " + tab)}
      <h2>{title}</h2>
      {htmls.map((html, index) => (
        <span class="link">
          <a href={html[0]} target="_blank" class="link-button">
            {html[1]}
          </a>
        </span>
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
