import MyContent from "../classes/MyContent.js";
import { LINKS } from "./links.js";

export const Hello = new MyContent(
  "Hello, there!",
  [
    [LINKS.linkedin, "LinkedIn"],
    [LINKS.github, "GitHub"],
  ],
  [
    // Intro page text
    "I am a software developer currently located in South Florida with nearly two years of professsional native Android app development experience.",
    "During my professional career, I have worked for Bank of America and for Accenture.",
    "I earned a Bachelor of Science in Computer Science from Florida Atlantic University in 2019.",
    "I have been described as detail-oriented and analytical.",
    "My passion for software development stems from my enjoyment of puzzle-solving and of building functional things.",
    "I am always eager to learn new things, particularly if those new things help me get better at my job.",
  ]
);

export const Webpage = new MyContent(
  "This Webpage",
  [[LINKS.webpage, "GitHub Repo"]],
  [
    "This webpage (hosted on GitHub Pages) is created with React, set up and tested using Vite.",
    "JSX, Components, State, and Hooks were all used to make the user interface and its interactability - as is the norm for React applications.",
  ]
);

export const Coursera = new MyContent(
  "Coursera Project",
  [[LINKS.coursera, "GitFront Repo Display"]],
  [
    // Coursera Project text
    "My project that I submittted to Coursera's Vanderbilt-developed Android developer specialization.",
    "This is a note-taking and -saving app. The user is able to write their own notes and save those notes to their local phone storage." +
      "The notes are displayed using a RecyclerView in order of date created. Users can also edit a previously created note or delete a note.",
    "Contains all four of the major Android app components - Activities, Broadcast Receivers, Services, and Content Providers.",
    "This version of the app is written in Kotlin.",
    "The WEB SERVICE implemented in this app is a simple image download. The ImageDownloaderService runs the DownloadAsyncTask that downloads the image." +
      "Both files are found under the 'imagedownloader' package.",
    "The notes themselves are saved to an SQLite Database using a Content Provider - MyContentProvider.",
    "ImageDownloadService is used to download an image for display on LaunchActivity. This is the remote Web Service as required" +
      "by the project specifications.",
    "Two Broadcast Receivers are used in this app: one is used to receive the image bitmap data from the Download Async Task that" +
      "handles the image download process;" +
      "the other displays notifications to the user when Content Provider tasks are executed.",
    "Activities are used to allow the user to interact with the app. There are 4 Activities with one acting as a superclass for the other four.",
    "EditActivity is where the user writes or edits a given note." +
      " ListActivity is where the user's notes are listed for the user to select." +
      " MainActivity is the landing page where the user can download an image from the internet and can proceed further into the app." +
      " ReadActivity allows the user to read a given note - but not edit it." +
      "LoggingActivity is the superclass mentioned and is mainly used for logging state changes.",
  ],
  ["../../src/assets/coursera_video.mp4"]
);

export const Filler = new MyContent(
  "Filler",
  [[LINKS.blank, "Hello, World!"]],
  [
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
    "filler",
  ]
);