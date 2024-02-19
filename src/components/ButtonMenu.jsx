import * as content from "../data/content.js";
import { Tab } from "../data/Tab.js";
import "../css/ButtonMenu.css";

function ButtonMenu({ onSelect }) {
  const buttons = Object.keys(Tab);

  return (
    <menu>
      {buttons.map((item, index) => (
        <span>
          <button class="menu_button" onClick={() => onSelect(index)}>
            {item}
          </button>
        </span>
      ))}
    </menu>
  );
}

export default ButtonMenu;
