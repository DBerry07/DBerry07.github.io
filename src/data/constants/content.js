import { Tab } from "../classes/Tab.js"
import * as SCREENS from "./screens.js"

console.log("In content.js file.")

const pageContent = {};

    pageContent[Tab.Hello] = SCREENS.Hello;
    
    pageContent[Tab.Webpage] = SCREENS.Webpage;

    pageContent[Tab.Coursera] = SCREENS.Coursera;

    pageContent[Tab.Filler] = SCREENS.Filler;


console.log(pageContent);

export default pageContent