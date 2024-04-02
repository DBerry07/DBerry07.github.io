import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";
import TabContent from "./TabContent.js";

export const React = new TabContent(
  "This Webpage", //title
  ["Built using React (JSX)", "Personal Project"], //subheading
  await getText(locations.ReactBody), //body --> "await" here is very important! Page won't work without it!
  null, //sections
  [[LINKS.webpage, locations.PicGithubTxt]] //htmls
);

export const Kotlin = new TabContent(
  "Vanderbilt Specialization Capstone ", //title
  ["Built using Kotlin", "Personal Project"], //subheading
  await getText(locations.CouseraBody), //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.CourseraGitfront), await getText(locations.CourseraDisc)], //sections
  [
    [LINKS.coursera, locations.PicGithubTxt],
    [LINKS.coursera_video, locations.PicYoutube],
    [LINKS.coursera_cert, locations.PicCoursera],
  ], //htmls
  await getText(locations.CouseraList) //list
);

export const Java = new TabContent(
  "Native Android App (Java)", //title
  ["Built using Java", "Personal Project"], //subheading
  await getText(locations.AndroidKotlinBody) //body --> "await" here is very important! Page won't work without it!
);

export const ReactNative = new TabContent(
  "React Native App", //title
  ["Built using React (JSX)", "Personal Project"], //subheading
  await getText(locations.ReactNativeBody) //body --> "await" here is very important! Page won't work without it!
);

export const iOS = new TabContent(
  "Native iOS App", //title
  ["Built using Swift", "Personal Project"], //subheading
  ["Put description", "and videos", "and screenshots", "of my iOS app", "here"] //body --> "await" here is very important! Page won't work without it!
);

export const Flutter = new TabContent(
  "Flutter App", //title
  ["Built using Dart", "Personal Project"], //subheading
  await getText(locations.FlutterText) //body --> "await" here is very important! Page won't work without it!
);

// export const Spring = new TabContent(
//   "Spring Boot Project", //title
//   null, //subheading
//   [
//     "Put description,",
//     "screenshots, and videos,",
//     "of my Spring Boot (or maybe just Spring) project",
//     "HERE",
//   ] //body --> "await" here is very important! Page won't work without it!
// );

export const AngularIonic = new TabContent(
  "Ionic Project", //title
  ["Built using Angular (Javascript)", "Personal Project"], //subheading
  ["TO BE DONE"] //body --> "await" here is very important! Page won't work without it!
);

export const Maui = new TabContent(
  "dotNet Maui Project", //title
  ["Built using C#", "Personal Project"], //subheading
  ["To be learned and done"] //body --> "await" here is very important! Page won't work without it!
);
