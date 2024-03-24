import content from "../data/constants/content.js";
import "../css/Entry.css";
import { tabs } from "../data/constants/tabs.js";
import { Fragment } from "react";
import { projects } from "../data/constants/project_tabs.js";
import myTabs from "../data/constants/tab_class.js";
import myProjects from "../data/constants/projects_tabs_class.js";
import Sections from "./Sections.jsx";
import Htmls from "./Htmls.jsx";
import Videos from "./Videos.jsx";
import Body from "./Body.jsx";

/**
 * Entry: the React component responsible for displaying tab content on the webpage. The content itself comes from a seperate file.
 * @param {Object} tab An object containing data on which tab the user selected.
 * @returns The React component in question.
 */
function Entry({ children, tab }) {
  //console.log("In ENTRY");
  //console.log(content);

  let data = content[myTabs.Hello.name];
  //console.log("data = " + data);
  // console.log("tab = " + tab);
  data = content[tab];
  // console.log("data = " + data);
  if (data === undefined) {
    data = content[myTabs.Hello.name];
  }

  let wholeBody = null,
    title = null,
    htmls = null,
    videos = null,
    body = null,
    sections = null,
    list = null,
    subheading = null;

  if (Object.hasOwn(data, "title")) {
    title = <div id="title">{data.title}</div>;
  } else {
    title = null;
  }

  sections = Sections(data);

  htmls = Htmls(data);

  videos = Videos(data);

  body = Body(data);

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
      <div id="subheading">
        <i>{data.subheading}</i>
      </div>
    );
  } else {
    subheading = null;
  }

  //console.log("tab = Coursera?: " + (tab === Tab.Coursera.name));
  if (tab === myTabs.Hello.name) {
    wholeBody = (
      <Fragment>
        {subheading}
        {htmls}
        {videos}
        {list}
        {body}
      </Fragment>
    );
  } else if (tab === myTabs.Kotlin.name) {
    wholeBody = (
      <Fragment>
        {subheading}
        {htmls}
        {videos}
        {body}
        {list}
      </Fragment>
    );
  } else {
    wholeBody = (
      <Fragment>
        {subheading}
        {htmls}
        {videos}
        {list}
        {body}
        {sections}
      </Fragment>
    );
    //console.log("tab = Hello?: " + (tab === Tab.Hello.name));
  }

  return (
    <Fragment>
      <div id="headbar">{title}</div>
      <div id="content-box">{wholeBody}</div>
    </Fragment>
  );
}

export default Entry;
