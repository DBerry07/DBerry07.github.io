import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import TabContent from "../constants/TabContent.js";
import MyList from "../myList.js";
import Title from "../../components/panel/Title.jsx";
import Subheading from "../../components/panel/Subheading.jsx";
import EntryBox from "../../components/panel/EntryBox.jsx";
import Techs from "../../components/panel/Techs.jsx";
import Body from "../../components/panel/Body.jsx";
import EntryBody from "../../components/panel/EntryBody.jsx";
import LinksBar from "../../components/panel/LinksBar.jsx";
import List from "../../components/panel/List.jsx";
import SubSection from "../../components/panel/SubSection.jsx";

export const CaliberDroid = [
  Title({ title: "CaliberDroid" }),
  EntryBox({
    items: [
      Subheading({ subheading: ["Professional Project", "Native Android"] }),
      LinksBar({ htmls: [[LINKS.caliber, locations.PicGithub]] }),
      EntryBody({
        items: [
          Body({ body: await getText(locations.CaliberText) }),
          List({
            title: "QC Manager abilities",
            list: await getText(locations.CaliberQC),
          }),
          List({
            title: "Trainer abilities",
            list: await getText(locations.CaliberTrainers),
          }),
          List({
            title: "My Roles & Responsibilities",
            list: await getText(locations.CaliberRoles),
          }),
          List({
            title: "Technologies Used",
            list: await getText(locations.CaliberTechs),
          }),
        ],
      }),
    ],
  }),
];
