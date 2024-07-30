import './drawer-button.css';
import { locations } from '../data/constants/filelocs';

const DrawerButton = ({ onClick }) => (
      <img src={locations.PicMenu} className="DrawerButton_Container job-img" onClick={onClick} />
  );

export default DrawerButton;