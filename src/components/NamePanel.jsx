import "../css/NamePanel.css";
import { LINKS } from "../data/constants/links.js";
import { locations } from "../data/constants/filelocs.js";

export default function NamePanel() {
  var size = 25;

  return (
    <div id="namepanel">
      <div id="name">
        David <span id="middle-initals">WJ</span> Berry
      </div>
      <div>
        <a href={LINKS.linkedin} target="_blank" className="job-link">
          <img src={locations.PicLinkedin} class="job-img" />
        </a>
        <a href={LINKS.github} target="_blank" className="job-link">
          <img src={locations.PicGithub} class="job-img" />
        </a>
        <a href="mailto:david.wj.berry@gmail.com" className="job-link">
          <img src={locations.PicSendmail} class="job-img" />
        </a>
      </div>
    </div>
  );
}
