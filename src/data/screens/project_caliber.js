import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import TabContent from "../constants/TabContent.js";
import MyList from "../myList.js";
import Title from "../../components/entry/Title.jsx";
import Subheading from "../../components/entry/Subheading.jsx";
import EntryBox from "../../components/entry/EntryBox.jsx";
import Techs from "../../components/entry/Techs.jsx";
import Body from "../../components/entry/Body.jsx";
import EntryBody from "../../components/entry/EntryBody.jsx";
import Htmls from "../../components/entry/Htmls.jsx";
import List from "../../components/entry/List.jsx";
import SubSection from "../../components/entry/SubSection.jsx";

export const CaliberDroid = [
  Title({ title: "CaliberDroid" }),
  EntryBox({
    items: [
      Subheading({ subheading: ["Professional Project", "Native Android"] }),
      Htmls({ htmls: [[LINKS.caliber, locations.PicGithubTxt]] }),
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
