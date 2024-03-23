import * as content from "../data/constants/content.js";
import { tabs } from "../data/constants/tabs.js";
import "../css/ButtonMenu.css";
import myTabs from "../data/constants/tab_class.js";
import myProjects from "../data/constants/projects_tabs_class.js";
import { Fragment } from "react";
import { panels } from "../data/constants/panels.js";

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
      <div id="blank"></div>
      <menu id="button-menu">
        {buttons.map((item, index) => (
          <span key={index}>
            <button className="menu_button" onClick={() => onSelect(item)}>
              {item.text}
            </button>
          </span>
        ))}
      </menu>
    </Fragment>
  );
}

export default ButtonMenu;
