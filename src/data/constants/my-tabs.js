import { locations } from "./filelocs.js";

export default class Panel {
  static Hello = new Panel("Hello", "Hello!");
  static About = new Panel("About", "About");
  static Education = new Panel("Education", "Education");
  static History = new Panel("History", "Work History");
  static Project01 = new Panel("TodoList", "ToDoList");
  static Project02 = new Panel("CaliberDroid", "Caliber");
  static Project03 = new Panel("Capstone", "Capstone");
  static MoreProjects = new Panel("MoreProjects", "More");
  static Certifications = new Panel("Certifications", "Certs")

  static Panels = [
    this.Hello,
    this.Education,
    this.History,
    this.Project01,
    this.Project03,
    this.Project02,
    this.MoreProjects,
    this.Certifications,
  ]

  constructor(name, text, icon = "", colour="black") {
    this.name = name;
    this.text = text;
  }
  toString() {
    return `${this.name}`;
  }
}
