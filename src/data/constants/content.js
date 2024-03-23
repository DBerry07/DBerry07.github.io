import myTabs from "./tab_class.js";
import myProjects from "./projects_tabs_class.js";
import { tabs } from "./tabs.js";
import { projects } from "./project_tabs.js";
import * as SCREENS from "./screens.js";
import * as PROJECTS from "./screens_projects.js";

// console.log("In content.js file.")

const pageContent = {};

pageContent[myTabs.Hello.name] = SCREENS.Hello;

pageContent[myTabs.Education.name] = SCREENS.Education;

pageContent[myProjects.ReactNative.name] = PROJECTS.React;

pageContent[myProjects.Java.name] = PROJECTS.Java;

pageContent[myProjects.Kotlin.name] = PROJECTS.Kotlin;

pageContent[myProjects.iOS.name] = PROJECTS.iOS;

// pageContent[projects.Spring] = PROJECTS.Spring;

// pageContent[projects.Angular] = PROJECTS.Angular;

// pageContent[tabs.Filler] = SCREENS.Filler;

// console.log(pageContent);

export default pageContent;
