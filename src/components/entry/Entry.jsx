import content from "../../data/constants/content.js";
import "../../css/Entry.css";
import { Fragment } from "react";
import myTabs from "../../data/constants/buttons.js";
import Sections from "./Sections.jsx";
import Htmls from "./Htmls.jsx";
import Videos from "./Videos.jsx";
import Body from "./Body.jsx";
import List from "./List.jsx";
import Subheading from "./Subheading.jsx";
import Title from "./Title.jsx";

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

  let wholeBody = null;
  let title = Title(data);
  let sections = Sections(data);
  let htmls = Htmls(data);
  let videos = Videos(data);
  let body = Body(data);
  let list = List(data);
  let subheading = Subheading(data);

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
