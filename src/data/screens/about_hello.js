import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import TabContent from "../constants/TabContent.js";
import Title from "../../components/entry/Title.jsx";
import Subheading from "../../components/entry/Subheading.jsx";
import EntryBox from "../../components/entry/EntryBox.jsx";
import EntryBody from "../../components/entry/EntryBody.jsx";
import Body from "../../components/entry/Body.jsx";
import SubSection from "../../components/entry/SubSection.jsx";
import ColourKey from "../../components/ColourKey.jsx";

export const Hello = [
  Title({ title: "Hello, there!" }),
  EntryBox({
    items: [
      Subheading({ subheading: ["Click on the buttons to navigate!"] }),
      EntryBody({
        items: [
          // ColourKey(),
          Body({ body: await getText(locations.HelloBody) })
        ],
      }),
    ],
  }),
];
