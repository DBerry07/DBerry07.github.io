import { tabs } from "./tabs.js";
import * as SCREENS from "./screens.js";

// console.log("In content.js file.")

const pageContent = {};

pageContent[tabs.Hello] = SCREENS.Hello;

pageContent[tabs.React] = SCREENS.React;

pageContent[tabs.AndroidJava] = SCREENS.AndroidJava;

pageContent[tabs.AndroidKotlin] = SCREENS.AndroidKotlin;

pageContent[tabs.ReactNative] = SCREENS.ReactNative;

pageContent[tabs.iOS] = SCREENS.iOS;

pageContent[tabs.Spring] = SCREENS.Spring;

pageContent[tabs.Angular] = SCREENS.Angular;

pageContent[tabs.Filler] = SCREENS.Filler;

// console.log(pageContent);

export default pageContent;
