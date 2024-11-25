// import "./name-panel.css";
import { LINKS } from "../data/constants/links.js";
import { locations } from "../data/constants/filelocs.js";

export default function NamePanel() {
  var size = 25;

  return (
    <div id="namepanel" className="col-span-6 grid grid-cols-1 grid-rows-2 h-full w-full place-items-center">
      <div id="name" className="text-5xl">
        David <span id="middle-initals">WJ</span> Berry
      </div>
      <div id="personal-links-bar grid grid-cols-3 place-items-center">
          <div>
        <a href={LINKS.linkedin} target="_blank" className="job-link">
          <img src={locations.PicLinkedin} className="job-img h-6" />
        </a>
          </div>
          <div>
        <a href={LINKS.github} target="_blank" className="job-link">
          <img src={locations.PicGithub} className="job-img h-6" />
        </a>
          </div>
          <div>
        <a href="mailto:david.wj.berry@gmail.com" className="job-link">
          <img src={locations.PicSendmail} className="job-img h-6" />
        </a>
          </div>
      </div>
    </div>
  );
}
