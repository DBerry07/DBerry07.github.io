import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";

export const Hello = {
  title: "Hello, there!",
  htmls: [
    [LINKS.linkedin, "[LinkedIn Profile]"],
    [LINKS.github, "[GitHub Profile]"],
  ],
  subheading: "Click on the buttons to navigate!",
  body: await getText(locations.HelloBody), // "await" here is very important! Page won't work without it!
};

export const Filler = {
  title: "Filler",
  htmls: [[LINKS.blank, "[Hello, World!]"]],
  body: filler(50),
};

export const Education = {
  title: "My Education",
  body: await getText(locations.EducationBody), // "await" here is very important! Page won't work without it!
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
