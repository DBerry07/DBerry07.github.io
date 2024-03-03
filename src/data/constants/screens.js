import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";

export const Hello = {
  title: "Hello, there!",
  htmls: [
    [LINKS.linkedin, "[LinkedIn Profile]"],
    [LINKS.github, "[GitHub Profile]"],
  ],
  subheading: "Click on the buttons to navigate!",
  body: await getText(locations.HelloBody), // "await" here is very important! Page won't work without it!
};

export const React = {
  title: "React Project",
  subheading: "It's this webpage!",
  htmls: [[LINKS.webpage, "[GitHub Repo]"]],
  body: await getText(locations.ReactBody), // "await" here is very important! Page won't work without it!
};

export const AndroidJava = {
  title: "Native Android App (Java)",
  subheading: "Vanderbilt Specialization Capstone",
  htmls: [[LINKS.coursera, "[GitFront Repo]"]],
  body: await getText(locations.CouseraBody), // "await" here is very important! Page won't work without it!
  activityList: await getText(locations.CouseraList),
  videos: ["../../src/assets/coursera_video.mp4"],
};

export const AndroidKotlin = {
  title: "Native Android App (Kotlin)",
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: await getText(locations.AndroidKotlinBody), // "await" here is very important! Page won't work without it!
};

export const ReactNative = {
  title: "React Native App",
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: await getText(locations.ReactNativeBody), // "await" here is very important! Page won't work without it!
};

export const iOS = {
  title: "Native iOS App",
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: [
    "Put description",
    "and videos",
    "and screenshots",
    "of my iOS app",
    "here",
  ].concat(filler(20)),
};

export const Spring = {
  title: "Spring Boot project",
  body: [
    "Put description,",
    "screenshots, and videos,",
    "of my Spring Boot (or maybe just Spring) project",
    "HERE",
  ].concat(filler(15)),
};

export const Angular = {
  title: "Angular Project",
  body: ["TO BE DONE"].concat(filler(20)),
};

export const Filler = {
  title: "Filler",
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: filler(50),
};

function filler(times) {
  let i = 0;
  let body = [];
  while (i < times) {
    i++;
    body.push("filler");
  }
  return body;
}
