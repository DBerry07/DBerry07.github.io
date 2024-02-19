import content from "../data/constants/content.js";
import "../css/Entry.css";
import { Tab } from "../data/classes/Tab.js";
import MyContent from "../data/classes/MyContent.js";

function Entry({ tab, children }) {
  console.log("Selected tab = " + tab);

  let data = content[Tab.Hello];

  if (Object.keys(Tab).includes(tab)) {
    data = content[tab];
  }

  const title = <h2>{data.title}</h2>;

  const htmls = data.htmls.map((html, index) => (
    <span class="link">
      <a href={html[0]} target="_blank" class="link-button">
        {html[1]}
      </a>
    </span>
  ));

  const videos = (
    <div>
      {data.videos.map((video, index) => (
        <video class="entry-video" width="320" height="540" controls>
          <source src={video} type="video/mp4" />
        </video>
      ))}
    </div>
  );

  const body = (
    <div class="entry-body">
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
