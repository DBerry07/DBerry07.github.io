
import { Education } from "../screens/about_education.js";
import { Hello } from "../screens/about_hello.js";
import { History } from "../screens/about_history.js";
import { CaliberDroid } from "../screens/project_caliber.js";
import { Capstone } from "../screens/project_capstone.js";
import { TodoList } from "../screens/project_todolist.js";
import { MoreProjects } from "../screens/projects_more.js";
import myTabs from "./my-tabs.js";
import * as SCREENS from "./screens.js";
import * as PROJECTS from "./screens_projects.js";

// console.log("In content.js file.")

const pageContent = {};

pageContent[myTabs.Hello.name] = Hello;
pageContent[myTabs.Education.name] = Education;
pageContent[myTabs.History.name] = History;
pageContent[myTabs.About.name] = SCREENS.About;

pageContent[myTabs.TodoList.name] = TodoList;
pageContent[myTabs.Java.name] = PROJECTS.Java;
pageContent[myTabs.Kotlin.name] = PROJECTS.Kotlin;
pageContent[myTabs.iOS.name] = PROJECTS.iOS;
pageContent[myTabs.ReactNative.name] = PROJECTS.ReactNative;
pageContent[myTabs.Flutter.name] = PROJECTS.Flutter;
pageContent[myTabs.React.name] = PROJECTS.React;
pageContent[myTabs.Maui.name] = PROJECTS.Maui;
pageContent[myTabs.AngularIonic] = PROJECTS.AngularIonic;
pageContent[myTabs.CaliberDroid] = CaliberDroid;
pageContent[myTabs.Capstone] = Capstone;
pageContent[myTabs.MoreProjects] = MoreProjects;

// pageContent[projects.Spring] = PROJECTS.Spring;

// pageContent[projects.Angular] = PROJECTS.Angular;

// pageContent[tabs.Filler] = SCREENS.Filler;

// console.log(pageContent);

export default pageContent;
