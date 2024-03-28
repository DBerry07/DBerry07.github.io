import "../css/MenuButton.css";

export default function MenuButton({ children, handleDrawerOpen }) {
  return (
    <button id="menu-button" onClick={handleDrawerOpen}>
      Open Menu
    </button>
  );
}
