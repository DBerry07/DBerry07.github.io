import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";
import TabContent from "./TabContent.js";
import Title from "../../components/entry/Title.jsx";
import Subheading from "../../components/entry/Subheading.jsx";
import EntryBox from "../../components/entry/EntryBox.jsx";
import EntryBody from "../../components/entry/EntryBody.jsx";
import Body from "../../components/entry/Body.jsx";
import SubSection from "../../components/entry/SubSection.jsx";

export const Helloo = new TabContent(
  "Hello, there!", //title
  ["Click on the buttons to navigate!"], //subheading
  await getText(locations.HelloBody) // "await" here is very important! Page won't work without it!
);

// export const Filler = {
//   title: "Filler",
//   htmls: [[LINKS.blank, "[Hello, World!]"]],
//   body: filler(50),
// };

export const Education = [
  Title({ title: "My Education" }),
  EntryBox({
    items: [
      EntryBody({
        items: [
          SubSection({
            title: "Florida Atlantic University",
            items: await getText(locations.Edu01),
          }),
          SubSection({
            title: "Revature, LLC.",
            items: await getText(locations.Edu02),
          }),
          SubSection({
            title: "Broward College",
            items: await getText(locations.Edu03),
          }),
        ],
      }),
    ],
  }),
];

export const EDU = new TabContent(
  "My Education", //title
  null, //subheading
  null, //body
  [
    await getText(locations.Edu01),
    await getText(locations.Edu02),
    await getText(locations.Edu03),
  ] //sections
);

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

export const HIS = new TabContent(
  "Work History", //title
  null, //subheading
  null, //body
  [
    await getText(locations.His01),
    await getText(locations.His03),
    await getText(locations.His02),
  ] //sections
);

export const About = new TabContent(
  "About Me", //title
  null, //subheading
  await getText(locations.About) //body
);

// function filler(times) {
//   let i = 0;
//   let body = [];
//   while (i < times) {
//     i++;
//     body.push("filler");
//   }
//   return body;
// }
