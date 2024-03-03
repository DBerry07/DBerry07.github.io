import { LINKS } from "./links.js";

export const Hello = {
  title: "Hello, there!",
  htmls: [
    [LINKS.linkedin, "[LinkedIn Profile]"],
    [LINKS.github, "[GitHub Profile]"],
  ],
  subheading: "Click on the buttons to navigate!",
  body: [
    // Intro page text
    "My name is David WJ Berry. Welcome to my webpage!",
    "I am a software developer currently located in South Florida with nearly two years of professional native Android app development experience.",
    "During my professional career, I have worked for Bank of America and for Accenture.",
    "I earned a Bachelor of Science in Computer Science from Florida Atlantic University in 2019.",
    "I have been described as detail-oriented and analytical.",
    "My passion for software development stems from my enjoyment of puzzle-solving and of building functional things.",
    "I am always eager to learn new things and have completed (and in the process of completing) a number of courses on Coursera and Udemy.",
  ],
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
  body: [
    // Coursera Project text
    "My project that I submittted to Coursera's Vanderbilt-developed Android developer specialization capstone course.",
    "This is a note-taking and -saving app. The user is able to write their own notes and save those notes to their local phone storage. " +
      "The notes are displayed using a RecyclerView in order of date created. Users can also edit a previously created note or delete a note.",
    "Contains all four of the major Android app components - Activities, Broadcast Receivers, Services, and Content Providers.",
    "This version of the app is written in Kotlin.",
    "The notes themselves are saved to an SQLite Database using a Content Provider - MyContentProvider.",
    "ImageDownloadService is used to download an image for display on LaunchActivity. This is the remote Web Service as required " +
      "by the project specifications.",
    "Two Broadcast Receivers are used in this app: one is used to receive the image bitmap data from the Download Async Task that " +
      "handles the image download process; " +
      "the other displays notifications to the user when Content Provider tasks are executed.",
    "Activities are used to allow the user to interact with the app. There are 4 Activities with one acting as a superclass for the other four.",
  ],
  activityList: [
    "EditActivity is where the user writes or edits a given note.",
    "ListActivity is where the user's notes are listed for the user to select.",
    "MainActivity is the landing page where the user can download an image from the internet and can proceed further into the app.",
    "ReadActivity allows the user to read a given note - but not edit it.",
    "LoggingActivity is the superclass mentioned and is mainly used for logging state changes.",
  ],
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
