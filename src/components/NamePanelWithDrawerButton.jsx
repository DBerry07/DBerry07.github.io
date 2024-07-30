import "./name-panel.css";
import { LINKS } from "../data/constants/links.js";
import { locations } from "../data/constants/filelocs.js";
import DrawerButton from "./DrawerButton.jsx";

export default function NamePanelWithDrawerButton({onClick}) {
  var size = 25;

  return (
    <div id="namepanel">
      <div id="name">
        David <span id="middle-initals">WJ</span> Berry
      </div>
      <div id="personal-links-bar">
        <DrawerButton onClick={onClick}/>
        <a href={LINKS.linkedin} target="_blank" className="job-link">
          <img src={locations.PicLinkedin} className="job-img" />
        </a>
        <a href={LINKS.github} target="_blank" className="job-link">
          <img src={locations.PicGithub} className="job-img" />
        </a>
        <a href="mailto:david.wj.berry@gmail.com" className="job-link">
          <img src={locations.PicSendmail} className="job-img" />
        </a>
      </div>
    </div>
  );
}
