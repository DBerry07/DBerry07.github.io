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

export const History = [
  Title({ title: "Work History" }),
  EntryBox({
    items: [
      EntryBody({
        items: [
          SubSection({
            title: "Bank of America (May 2021 - May 2022, Contract)",
            items: await getText(locations.His01),
          }),
          SubSection({
            title: "Career Break (June 2022 - Present)",
            items: await getText(locations.His03),
          }),
          SubSection({
            title: "Revature, LLC. (Jan 2020 - Sept 2020, Contract)",
            items: await getText(locations.His02),
          }),
        ],
      }),
    ],
  }),
];
