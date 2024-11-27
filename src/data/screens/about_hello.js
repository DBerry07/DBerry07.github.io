import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import Title from "../../components/panel/Title.jsx";
import Subheading from "../../components/panel/Subheading.jsx";
import PanelHolder from "../../components/panel/PanelHolder.jsx";
import PanelMainContent from "../../components/panel/PanelMainContent.jsx";
import Body from "../../components/panel/Body.jsx";

export const Hello = [
  Title({ title: "Hello, there!" }),
  PanelHolder({
    items: [
      Subheading({ subheading: ["Click on the buttons to navigate!"] }),
      PanelMainContent({
        items: [
          // ColourKey(),
          Body({ body: await getText(locations.HelloBody) })
        ],
      }),
    ],
  }),
];
