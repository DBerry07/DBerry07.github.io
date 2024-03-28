import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";

export const React = {
  title: "This Webpage",
  subheading: ["React-based Webpage", "Personal Project"],
  htmls: [[LINKS.webpage, locations.PicGithubTxt]],
  body: await getText(locations.ReactBody), // "await" here is very important! Page won't work without it!
};

export const Kotlin = {
  title: "Vanderbilt Specialization Capstone ",
  subheading: ["Native Android App (Kotlin)", "Personal Project"],
  htmls: [
    [LINKS.coursera, locations.PicGithubTxt],
    [LINKS.coursera_video, locations.PicYoutube],
    [LINKS.coursera_cert, locations.PicCoursera],
  ],
  body: await getText(locations.CouseraBody), // "await" here is very important! Page won't work without it!
  activityList: await getText(locations.CouseraList),
  // videos: ["../../src/assets/coursera_video.mp4"],
};

export const Java = {
  title: "Native Android App (Java)",
  subheading: ["Native Android App (Java)", "Personal Project"],
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: await getText(locations.AndroidKotlinBody), // "await" here is very important! Page won't work without it!
};

export const ReactNative = {
  title: "React Native App",
  subheading: ["React Native App", "Personal Project"],
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: await getText(locations.ReactNativeBody), // "await" here is very important! Page won't work without it!
};

export const iOS = {
  title: "Native iOS App",
  subheading: ["Native iOS App (Swift)", "Personal Project"],
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: [
    "Put description",
    "and videos",
    "and screenshots",
    "of my iOS app",
    "here",
  ],
};

export const Flutter = {
  title: "Flutter App (Dart)",
  subheading: ["Flutter App (Dart)", "Personal Project"],
  htmls: [[LINKS.blank, "[Hello, World!"]],
  body: await getText(locations.FlutterText),
};

export const Spring = {
  title: "Spring Boot project",
  body: [
    "Put description,",
    "screenshots, and videos,",
    "of my Spring Boot (or maybe just Spring) project",
    "HERE",
  ],
};

export const Angular = {
  title: "Angular Project",
  body: ["TO BE DONE"],
};
