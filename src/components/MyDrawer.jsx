import './my-drawer.css';

const MyDrawer = (props) => (
    <div className={`Drawer__Container ${props.isOpen && "Drawer__Container--isOpen"}`}>
      {props.children}
    </div>
  );

export default MyDrawer;