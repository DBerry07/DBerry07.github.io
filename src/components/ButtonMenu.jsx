import * as content from "../data/constants/content.js";
import { Tab } from "../data/classes/Tab.js";
import "../css/ButtonMenu.css";

function ButtonMenu({ onSelect }) {
  const buttons = Object.keys(Tab);

  return (
    <menu id="button-menu">
      {buttons.map((item, index) => (
        <span key={item}>
          <button className="menu_button" onClick={() => onSelect(item)}>
            {item}
          </button>
        </span>
      ))}
    </menu>
  );
}

export default ButtonMenu;
