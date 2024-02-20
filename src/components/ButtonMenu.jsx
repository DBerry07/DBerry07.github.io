import * as content from "../data/constants/content.js";
import { tabs } from "../data/constants/tabs.js";
import "../css/ButtonMenu.css";

function ButtonMenu({ onSelect }) {
  const buttons = Object.keys(tabs);

  return (
    <menu id="button-menu">
      {buttons.map((item, index) => (
        <span key={index}>
          <button className="menu_button" onClick={() => onSelect(item)}>
            {item}
          </button>
        </span>
      ))}
    </menu>
  );
}

export default ButtonMenu;
