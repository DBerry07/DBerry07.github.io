// import "./name-panel.css";
import { LINKS } from "../data/constants/links.js";
import { locations } from "../data/constants/filelocs.js";

export default function NamePanel() {
  var size = 25;

  return (
    <div id="namepanel" className="col-span-5 grid grid-cols-1 grid-rows-2 h-full w-full place-items-center">
      <div id="name" className="text-5xl font-enriqueta">
        David <span id="middle-initals">WJ</span> Berry
      </div>
      <div id="personal-links-bar" className="place-items-center flex flex-row">
          <div>
        <a href={LINKS.linkedin} target="_blank" className="job-link">
          <img src={locations.PicLinkedin} className="job-img h-8 mr-3 ml-3" />
        </a>
          </div>
          <div>
        <a href={LINKS.github} target="_blank" className="job-link">
          <img src={locations.PicGithub} className="job-img h-8 mr-3 ml-3" />
        </a>
          </div>
          <div>
        <a href="mailto:david.wj.berry@gmail.com" className="job-link">
          <img src={locations.PicSendmail} className="job-img h-8 mr-3 ml-3" />
        </a>
          </div>
      </div>
    </div>
  );
}
