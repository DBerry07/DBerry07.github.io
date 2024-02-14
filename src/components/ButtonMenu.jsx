import * as content from "../data/content.js";

function ButtonMenu({ onSelect }) {
  return (
    <menu>
      {content.pageContent.map((item, index) => (
        <button onClick={() => onSelect(index)}>{item.title}</button>
      ))}
    </menu>
  );
}

export default ButtonMenu;
