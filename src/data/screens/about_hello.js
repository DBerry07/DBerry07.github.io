import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import Title from "../../components/panel/Title.jsx";
import Subheading from "../../components/panel/Subheading.jsx";
import EntryBox from "../../components/panel/EntryBox.jsx";
import EntryBody from "../../components/panel/EntryBody.jsx";
import Body from "../../components/panel/Body.jsx";

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
