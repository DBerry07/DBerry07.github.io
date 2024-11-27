import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import TabContent from "../constants/TabContent.js";
import Title from "../../components/panel/Title.jsx";
import Subheading from "../../components/panel/Subheading.jsx";
import PanelHolder from "../../components/panel/PanelHolder.jsx";
import PanelMainContent from "../../components/panel/PanelMainContent.jsx";
import Body from "../../components/panel/Body.jsx";
import SubSection from "../../components/panel/SubSection.jsx";

export const History = [
  Title({ title: "Work History" }),
  PanelHolder({
    items: [
      PanelMainContent({
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
