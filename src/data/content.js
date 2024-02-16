import * as constants from "./constants.js"
import * as Screens from "./screens.js"

console.log("In content.js file.")

const pageContent = {};

    pageContent[constants.Tab.Hello] = Screens.Hello;
    
    pageContent[constants.Tab.Webpage] = Screens.Webpage;

    pageContent[constants.Tab.Coursera] = Screens.Coursera;

    pageContent[constants.Tab.Filler] = Screens.Filler;


console.log(pageContent);

export default pageContent