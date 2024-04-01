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

function Entry(props) {
  return (
    <>
      <div id="headbar">{props.title}</div>
      <div id="content-box">
        {props.subheading}
        {props.htmls}
        {props.body}
        {props.sections}
        {props.list}
      </div>
    </>
  );
}

export default Entry;
