import * as content from "../data/content.js";

function ButtonMenu(props) {
  return (
    <menu>
      {content.pageContent.map((item) => (
        <button
          onClick={() => {
            //TODO: Change shown tab via button click.
          }}
        >
          {item.title}
        </button>
      ))}
    </menu>
  );
}

export default ButtonMenu;
