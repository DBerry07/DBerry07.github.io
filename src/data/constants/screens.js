import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";

export const Hello = {
  title: "Hello, there!",
  subheading: ["Click on the buttons to navigate!"],
  body: await getText(locations.HelloBody), // "await" here is very important! Page won't work without it!
};

export const Filler = {
  title: "Filler",
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: filler(50),
};

export const Education = {
  title: "My Education",
  subheading: [""],
  //body: await getText(locations.EducationBody), // "await" here is very important! Page won't work without it!
  sections: [
    await getText(locations.Edu01),
    await getText(locations.Edu02),
    await getText(locations.Edu03),
  ],
};

export const History = {
  title: "Work History",
  subheading: [""],
  sections: [
    await getText(locations.His01),
    await getText(locations.His03),
    await getText(locations.His02),
  ],
};

export const About = {
  title: "About Me",
  body: await getText(locations.About),
};

function filler(times) {
  let i = 0;
  let body = [];
  while (i < times) {
    i++;
    body.push("filler");
  }
  return body;
}
