import "./menu-button.css";

export default function MenuButton({ children, handleDrawerOpen }) {
  return (
    <span id="menu-button-span">
      <button id="menu-button" onClick={handleDrawerOpen}>
        MENU
      </button>
    </span>
  );
}
