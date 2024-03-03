import { LINKS } from "./links.js";
import { getText } from "./fetching.js";

export const Hello = {
  title: "Hello, there!",
  htmls: [
    [LINKS.linkedin, "[LinkedIn Profile]"],
    [LINKS.github, "[GitHub Profile]"],
  ],
  subheading: "Click on the buttons to navigate!",
  body: await getText("hellobody.txt"),
};

export const React = {
  title: "React Project",
  subheading: "It's this webpage!",
  htmls: [[LINKS.webpage, "[GitHub Repo]"]],
  body: [
    "This webpage (hosted on GitHub Pages) is created with React, set up and tested using Vite.",
    "JSX, Components, State, and Hooks were all used to make the user interface and its interactability - as is the norm for React applications.",
  ],
};

export const AndroidJava = {
  title: "Native Android App (Java)",
  subheading: "Vanderbilt Specialization Capstone",
  htmls: [[LINKS.coursera, "[GitFront Repo]"]],
  body: await getText("courserabody.txt"),
  activityList: await getText("courseralist.txt"),
  videos: ["../../src/assets/coursera_video.mp4"],
};

export const AndroidKotlin = {
  title: "Native Android App (Kotlin)",
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: [
    "Put description, videos, and screenshots",
    "of the ResidentalManager app I am making",
    "here",
  ].concat(filler(20)),
};

export const ReactNative = {
  title: "React Native App",
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: [
    "Put description",
    "and videos",
    "and screenshots",
    "of",
    "my React Native project",
    "here",
  ].concat(filler(20)),
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
