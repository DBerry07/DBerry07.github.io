import content from "../data/constants/content.js";
import "../css/Entry.css";
import { Tab } from "../data/classes/Tab.js";
import MyContent from "../data/classes/MyContent.js";

// Remember: children must come first!
function Entry({ children, tab }) {
  console.log("Selected tab = " + tab);

  let data = content[Tab.Hello];

  if (Object.keys(Tab).includes(tab)) {
    data = content[tab];
  }

  const title = <h2>{data.title}</h2>;

  const htmls = (
    <div id="link-bar">
      {data.htmls.map((html, index) => (
        <span key={html} className="link">
          <a href={html[0]} target="_blank" className="link-button">
            {html[1]}
          </a>
        </span>
      ))}
    </div>
  );

  const videos =
    data.videos.length > 0 ? (
      <div id="video-section">
        {data.videos.map((video, index) => (
          <video className="entry-video" controls>
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    ) : null;

  const body = (
    <div id="entry-body">
      {data.body.map((item, index) => (
        <p>{item}</p>
      ))}
    </div>
  );

  return (
    <div id="content-box">
      {title}
      {htmls}
      {videos}
      {body}
    </div>
  );
}

export default Entry;
