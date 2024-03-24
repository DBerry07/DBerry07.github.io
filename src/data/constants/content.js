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

pageContent[myTabs.History.name] = SCREENS.History;

pageContent[myTabs.React.name] = PROJECTS.React;

pageContent[myTabs.Java.name] = PROJECTS.Java;

pageContent[myTabs.Kotlin.name] = PROJECTS.Kotlin;

pageContent[myTabs.iOS.name] = PROJECTS.iOS;

// pageContent[projects.Spring] = PROJECTS.Spring;

// pageContent[projects.Angular] = PROJECTS.Angular;

// pageContent[tabs.Filler] = SCREENS.Filler;

// console.log(pageContent);

export default pageContent;
