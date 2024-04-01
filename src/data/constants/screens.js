import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";
import TabContent from "./TabContent.js";

export const Hello = new TabContent(
  "Hello, there!", //title
  ["Click on the buttons to navigate!"], //subheading
  await getText(locations.HelloBody) // "await" here is very important! Page won't work without it!
);

// export const Filler = {
//   title: "Filler",
//   htmls: [[LINKS.blank, "[Hello, World!]"]],
//   body: filler(50),
// };

export const Education = new TabContent(
  "My Education", //title
  null, //subheading
  null, //body
  [
    await getText(locations.Edu01),
    await getText(locations.Edu02),
    await getText(locations.Edu03),
  ] //sections
);

export const History = new TabContent(
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
