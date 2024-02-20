import content from "../data/constants/content.js";
import "../css/Entry.css";
import { Tab } from "../data/classes/Tab.js";

// Remember: children must come first!
function Entry({ children, tab }) {
  console.log("Selected tab = " + tab);

  let data = content[Tab.Hello];
  if (Object.keys(Tab).includes(tab)) {
    data = content[tab];
  }

  let title = null,
    htmls = null,
    videos = null,
    body = null,
    list = null;

  if (Object.hasOwn(data, "title")) {
    title = <h2>{data.title}</h2>;
  } else {
    title = null;
  }

  if (Object.hasOwn(data, "htmls")) {
    htmls = (
      <div id="link-bar">
        {data.htmls.map((html, index) => (
          <span key={index} className="link">
            <a href={html[0]} target="_blank" className="link-button">
              {html[1]}
            </a>
          </span>
        ))}
      </div>
    );
  } else {
    htmls = null;
  }

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

  if (Object.hasOwn(data, "body")) {
    body = (
      <div id="entry-body">
        {data.body.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  } else {
    body = null;
  }

  if (Object.hasOwn(data, "activityList")) {
    list = (
      <ul>
        {data.activityList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  } else {
    list = null;
  }

  const wholeBody = (
    <div>
      {body}
      {list}
    </div>
  );

  return (
    <div id="content-box">
      {title}
      {htmls}
      {videos}
      {wholeBody}
    </div>
  );
}

export default Entry;
