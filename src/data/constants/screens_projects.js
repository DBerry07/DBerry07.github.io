import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";
import TabContent from "./TabContent.js";
import MyList from "../myList.js";
import Title from "../../components/panel/Title.jsx";
import Subheading from "../../components/panel/Subheading.jsx";
import PanelHolder from "../../components/panel/PanelHolder.jsx";
import Techs from "../../components/panel/Techs.jsx";
import Body from "../../components/panel/Body.jsx";
import PanelMainContent from "../../components/panel/PanelMainContent.jsx";
import LinksBar from "../../components/panel/LinksBar.jsx";
import List from "../../components/panel/List.jsx";
import SubSection from "../../components/panel/SubSection.jsx";

export const React = new TabContent(
  "This Webpage", //title
  ["Personal Project"], //subheading
  await getText(locations.ReactBody), //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.ReactLearnings)], //sections
  [[LINKS.webpage, locations.PicGithubTxt]], //htmls
  null, //list,
  ["Javascript", "JSX", "React", "Vite", "Visual Studio Code"] //techs
);

export const Kotlin = new TabContent(
  "Residental Manager", //title
  ["Native Android App", "Personal Project"], //subheading
  await getText(locations.AndroidKotlinBody), //body
  null, //sections
  [[LINKS.residental, locations.PicGithubTxt]], //htmls
  null, //list
  ["Kotlin", "Jetpack Compose", "Android Jetpack", "Android Studio"] //techs
);

export const Java = new TabContent(
  "Native Android App (Java)", //title
  ["Native Android App", "Personal Project"], //subheading
  await getText(locations.AndroidKotlinBody), //body --> "await" here is very important! Page won't work without it!
  null, //sections
  null, //htmls
  null, //list
  ["Java", "Android Studio"] //techs
);

export const ReactNative = new TabContent(
  "React Native App", //title
  ["Personal Project"], //subheading
  await getText(locations.ReactNativeBody), //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.ReactNativeLearnings)] //sections
);

export const iOS = new TabContent(
  "Native iOS App", //title
  ["Personal Project"], //subheading
  ["Put description", "and videos", "and screenshots", "of my iOS app", "here"], //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.IOSLearnings)], //sections
  null, //htmls
  null, //list
  ["Swift", "Xcode", "MacOS"] //techs
);

export const Flutter = new TabContent(
  "Pet Food Log", //title
  ["Personal Project"], //subheading
  await getText(locations.FlutterText), //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.FlutterLearnings)], //sections
  [[LINKS.flutter, locations.PicGithubTxt]], //htmls
  null, //list
  ["Dart", "Flutter", "Android Studio"] //techs
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
  ["Personal Project"], //subheading
  ["TO BE DONE"], //body --> "await" here is very important! Page won't work without it!
  null, //sections
  null, //htmls
  null, //list
  ["Javascript", "Angular", "Ionic"] //techs
);

export const Maui = new TabContent(
  "dotNet Maui Project", //title
  ["Personal Project"], //subheading
  ["To be learned and done"], //body --> "await" here is very important! Page won't work without it!
  null, //sections
  null, //htmls
  null, //list
  ["C# (C-sharp)", ".NET Maui", "Visual Studio 2022"] //techs
);

export const Caliber = new TabContent(
  "CaliberDroid", //title
  ["Native Android App", "Professional Project"],
  await getText(locations.CaliberText), //body
  null, //sections
  [[LINKS.caliber, locations.PicGithubTxt]], //htmls
  null,
  ["Kotlin", "Views UI Framework", "Retrofit", "Android Studio", "Postman"]
);