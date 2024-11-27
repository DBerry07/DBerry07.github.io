import myTabs from "../data/constants/my-tabs.js";
import { Fragment } from "react";
import MyButton from "./MyButton.jsx";

/**
 * ButtonMenu contains the buttons that a user will use to navigate the webpage - nominally for changing the displayed tab contents.
 * @param {function} onSelect: function passed to ButtonMenu to be executed when a button is clicked. Tells App state to change,
 *  thus changing the displayed tab.
 * @returns The react component in question.
 */
function ButtonMenu({ panel, onSelect }) {
  // console.log("panel selected = " + panel);
  var buttons = myTabs.Panels;

  return (
    <Fragment>
      <menu id="button-menu" className="lg:row-span-12 lg:col-span-2 p-2 text-2xl grid grid-cols-1 place-items-center h-full w-full">
        {buttons.map((item, index) => (
          <MyButton item={item} key={index} onSelect={onSelect}/>
        ))}
      </menu>
    </Fragment>
  );
}

export default ButtonMenu;
