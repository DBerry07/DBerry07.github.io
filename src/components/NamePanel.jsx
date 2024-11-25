// import "./name-panel.css";
import { LINKS } from "../data/constants/links.js";
import { locations } from "../data/constants/filelocs.js";

export default function NamePanel() {
  var size = 25;

  return (
    <div id="namepanel">
      <div id="name">
        David <span id="middle-initals">WJ</span> Berry
      </div>
      <div id="personal-links-bar">
        <a href={LINKS.linkedin} target="_blank" className="job-link">
          <img src={locations.PicLinkedin} className="job-img h-6" />
        </a>
        <a href={LINKS.github} target="_blank" className="job-link">
          <img src={locations.PicGithub} className="job-img h-6" />
        </a>
        <a href="mailto:david.wj.berry@gmail.com" className="job-link">
          <img src={locations.PicSendmail} className="job-img h-6" />
        </a>
      </div>
    </div>
  );
}
