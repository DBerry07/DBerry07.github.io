import content from "../data/constants/content.js";
import "../css/Entry.css";

function Entry({ tab, children }) {
  console.log("In Entry = " + tab);
  const data = content[tab];

  // console.log("Title: " + title);
  // console.log("HTMLs: " + htmls);
  // console.log("Body: " + body);
  return (
    <div id="content-box">
      {console.log("Generating content for tab: " + tab)}
      <h2>{tab ? data.title : null}</h2>
      {tab
        ? data.htmls.map((html, index) => (
            <span class="link">
              <a href={html[0]} target="_blank" class="link-button">
                {html[1]}
              </a>
            </span>
          ))
        : null}
      <div>
        <div>
          {tab
            ? data.videos.map((video, index) => (
                <video class="entry-video" width="320" height="540" controls>
                  <source src={video} type="video/mp4" />
                </video>
              ))
            : null}
        </div>
        <div class="entry-body">
          {tab ? (
            data.body.map((item, index) => <p>{item}</p>)
          ) : (
            <p>Invalid selection</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entry;
