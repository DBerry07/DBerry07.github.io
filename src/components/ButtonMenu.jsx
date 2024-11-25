import "./button-menu.css";
import myTabs from "../data/constants/my-tabs.js";
import { Fragment } from "react";
import { panels } from "../data/constants/panels.js";
import "../css/buttons.css";
import MyButton from "./MyButton.jsx";

/**
 * ButtonMenu contains the buttons that a user will use to navigate the webpage - nominally for changing the displayed tab contents.
 * @param {function} onSelect: function passed to ButtonMenu to be executed when a button is clicked. Tells App state to change,
 *  thus changing the displayed tab.
 * @returns The react component in question.
 */
function ButtonMenu({ panel, onSelect }) {
  // console.log("panel selected = " + panel);
  var buttons = undefined;
  if (panel === panels.About) {
    buttons = myTabs.AboutList;
  } else if (panel === panels.Projects) {
    buttons = myTabs.ProjectList;
  }

  return (
    <Fragment>
      <menu id="button-menu" className="row-span-5">
        {buttons.map((item, index) => (
          <MyButton item={item} key={index} onSelect={onSelect}/>
        ))}
      </menu>
    </Fragment>
  );
}

export default ButtonMenu;
