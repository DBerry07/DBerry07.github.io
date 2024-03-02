import { tabs } from "./tabs.js";
import * as SCREENS from "./screens.js";

// console.log("In content.js file.")

const pageContent = {};

pageContent[tabs.Hello] = SCREENS.Hello;

pageContent[tabs.React] = SCREENS.React;

pageContent[tabs.Coursera] = SCREENS.Coursera;

pageContent[tabs.Android] = SCREENS.Android;

pageContent[tabs.ReactNative] = SCREENS.ReactNative;

pageContent[tabs.iOS] = SCREENS.iOS;

pageContent[tabs.Filler] = SCREENS.Filler;

// console.log(pageContent);

export default pageContent;
