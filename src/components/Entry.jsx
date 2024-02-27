import content from "../data/constants/content.js";
import "../css/Entry.css";
import { tabs } from "../data/constants/tabs.js";
import { Fragment } from "react";

/**
 * Entry: the React component responsible for displaying tab content on the webpage. The content itself comes from a seperate file.
 * @param {Object} tab An object containing data on which tab the user selected.
 * @returns The React component in question.
 */
function Entry({ children, tab }) {
  console.log("Selected tab = " + tab);

  let data = content[tabs.Hello];
  if (Object.keys(tabs).includes(tab)) {
    data = content[tab];
  }

  let wholeBody = null,
    title = null,
    htmls = null,
    videos = null,
    body = null,
    list = null,
    subheading = null;

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

  if (Object.hasOwn(data, "subheading")) {
    subheading = (
      <h4>
        <i>{data.subheading}</i>
      </h4>
    );
  } else {
    subheading = null;
  }

  //console.log("tab = Coursera?: " + (tab === Tab.Coursera.name));
  if (tab === tabs.Coursera) {
    wholeBody = (
      <Fragment>
        {subheading}
        {htmls}
        {videos}
        {body}
        {list}
      </Fragment>
    );
  } else if (tab === tabs.Hello) {
    wholeBody = (
      <Fragment>
        {subheading}
        {htmls}
        {videos}
        {list}
        {body}
      </Fragment>
    );
  } else {
    wholeBody = (
      <Fragment>
        {htmls}
        {subheading}
        {videos}
        {list}
        {body}
      </Fragment>
    );
    //console.log("tab = Hello?: " + (tab === Tab.Hello.name));
  }

  return (
    <div id="content-box">
      {title}
      {wholeBody}
    </div>
  );
}

export default Entry;
