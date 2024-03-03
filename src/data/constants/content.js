import { tabs } from "./tabs.js";
import { projects } from "./project_tabs.js";
import * as SCREENS from "./screens.js";

// console.log("In content.js file.")

const pageContent = {};

pageContent[tabs.Hello] = SCREENS.Hello;

pageContent[projects.React] = SCREENS.React;

pageContent[projects.AndroidJava] = SCREENS.AndroidJava;

pageContent[projects.AndroidKotlin] = SCREENS.AndroidKotlin;

pageContent[projects.ReactNative] = SCREENS.ReactNative;

pageContent[projects.iOS] = SCREENS.iOS;

pageContent[projects.Spring] = SCREENS.Spring;

pageContent[projects.Angular] = SCREENS.Angular;

pageContent[tabs.Filler] = SCREENS.Filler;

// console.log(pageContent);

export default pageContent;
