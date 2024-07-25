import content from "../../data/constants/content.js";
import "./entry.css";
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
  // return (
  //   <div id="entry">
  //     <div id="headbar">{props.title}</div>
  //     <div id="content-box">
  //       {props.subheading}
  //       {props.htmls}
  //       <div id="entry-body">
  //         {props.techs}
  //         {props.body}
  //         {props.list}
  //         {props.sections}
  //         <br></br>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div id="entry">
      { props.content.map((item, index) =>
      item
    ) }
    </div>
  )
}

export default Entry;
