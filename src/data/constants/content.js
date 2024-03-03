import { tabs } from "./tabs.js";
import { projects } from "./project_tabs.js";
import * as SCREENS from "./screens.js";
import * as PROJECTS from "./screens_projects.js";

// console.log("In content.js file.")

const pageContent = {};

pageContent[tabs.Hello] = SCREENS.Hello;

pageContent[projects.React] = PROJECTS.React;

pageContent[projects.AndroidJava] = PROJECTS.AndroidJava;

pageContent[projects.AndroidKotlin] = PROJECTS.AndroidKotlin;

pageContent[projects.ReactNative] = PROJECTS.ReactNative;

pageContent[projects.iOS] = PROJECTS.iOS;

pageContent[projects.Spring] = PROJECTS.Spring;

pageContent[projects.Angular] = PROJECTS.Angular;

pageContent[tabs.Filler] = SCREENS.Filler;

// console.log(pageContent);

export default pageContent;
