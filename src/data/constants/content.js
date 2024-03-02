import { tabs } from "./tabs.js";
import * as SCREENS from "./screens.js";

// console.log("In content.js file.")

const pageContent = {};

pageContent[tabs.Hello] = SCREENS.Hello;

pageContent[tabs.Webpage] = SCREENS.Webpage;

pageContent[tabs.Coursera] = SCREENS.Coursera;

pageContent[tabs.ReactNative] = SCREENS.ReactNative;

pageContent[tabs.Filler] = SCREENS.Filler;

// console.log(pageContent);

export default pageContent;
