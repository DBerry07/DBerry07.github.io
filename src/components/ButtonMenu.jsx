import * as content from "../data/constants/content.js";
import { tabs } from "../data/constants/tabs.js";
import "../css/ButtonMenu.css";
import { Fragment } from "react";

/**
 * ButtonMenu contains the buttons that a user will use to navigate the webpage - nominally for changing the displayed tab contents.
 * @param {function} onSelect: function passed to ButtonMenu to be executed when a button is clicked. Tells App state to change,
 *  thus changing the displayed tab.
 * @returns The react component in question.
 */
function ButtonMenu({ children, items, onSelect, visible }) {
  const buttons = Object.keys(items);
  let show = "";
  if (visible === true) {
    show = { visibility: "visible" };
  } else {
    show = { visibility: "collapse" };
  }

  return (
    <div style={show}>
      <div id="blank"></div>
      <menu id="button-menu">
        {buttons.map((item, index) => (
          <span key={index}>
            <button className="menu_button" onClick={() => onSelect(item)}>
              {item}
            </button>
          </span>
        ))}
      </menu>
    </div>
  );
}

export default ButtonMenu;
