import "./button-menu.css";
import myTabs from "../data/constants/buttons.js";
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
  var buttons = myTabs.MyButtons

  return (
    <Fragment>
      <menu id="button-menu">
        {buttons.map((item, index) => (
          <MyButton item={item} key={index} onSelect={onSelect}/>
        ))}
      </menu>
    </Fragment>
  );
}

export default ButtonMenu;
