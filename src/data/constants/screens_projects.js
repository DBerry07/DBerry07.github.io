import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";
import TabContent from "./TabContent.js";

export const React = new TabContent(
  "This Webpage", //title
  ["React-based Webpage", "Personal Project"], //subheading
  await getText(locations.ReactBody), //body
  null, //sections
  [[LINKS.webpage, locations.PicGithubTxt]] //htmls
);

export const Kotlin = new TabContent(
  "Vanderbilt Specialization Capstone ", //title
  ["Native Android App (Kotlin)", "Personal Project"], //subheading
  await getText(locations.CouseraBody), //body
  null, //sections
  [
    [LINKS.coursera, locations.PicGithubTxt],
    [LINKS.coursera_video, locations.PicYoutube],
    [LINKS.coursera_cert, locations.PicCoursera],
  ], //htmls
  await getText(locations.CouseraList) //list
);

export const Java = new TabContent(
  "Native Android App (Java)", //title
  ["Native Android App (Java)", "Personal Project"], //subheading
  await getText(locations.AndroidKotlinBody), //body
  // "await" here is very important! Page won't work without it!
  null, //sections
  [[LINKS.blank, "[Hello, World!]"]] //htmls
);

export const ReactNative = new TabContent(
  "React Native App", //title
  ["React Native App", "Personal Project"], //subheading
  await getText(locations.ReactNativeBody), //body
  // "await" here is very important! Page won't work without it!
  null, //sections
  [[LINKS.blank, "[Hello, World!]"]] //htmls
);

export const iOS = new TabContent(
  "Native iOS App", //title
  ["Native iOS App (Swift)", "Personal Project"], //subheading
  ["Put description", "and videos", "and screenshots", "of my iOS app", "here"], //body
  null, //sections
  [[LINKS.blank, "[Hello, World!]"]] //htmls
);

export const Flutter = new TabContent(
  "Flutter App (Dart)", //title
  ["Flutter App (Dart)", "Personal Project"], //subheading
  await getText(locations.FlutterText), //body
  null, //sections
  [[LINKS.blank, "[Hello, World!"]] //htmls
);

// export const Spring = new TabContent(
//   "Spring Boot Project", //title
//   null, //subheading
//   [
//     "Put description,",
//     "screenshots, and videos,",
//     "of my Spring Boot (or maybe just Spring) project",
//     "HERE",
//   ] //body
// );

export const AngularIonic = new TabContent(
  "Angular Project", //title
  null, //subheading
  ["TO BE DONE"] //body
);

export const Maui = new TabContent(
  "dotNet Maui Project", //title
  null, //subheading
  ["To be learned and done"] //body
);
