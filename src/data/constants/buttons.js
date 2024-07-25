import { locations } from "../constants/filelocs.js";

export default class Tabs {
  static Hello = new Tabs("Hello", "Hello!");
  static About = new Tabs("About", "About");
  static Education = new Tabs("Education", "Education");
  static History = new Tabs("History", "Work History");
  static Projects = new Tabs("Projects", ">> Projects");

  static Back = new Tabs("Back", "<< Back");
  static Kotlin = new Tabs("Kotlin", "Android (2)", locations.PicAndroid);
  static TodoList = new Tabs("TodoList", "TodoList");
  static React = new Tabs("React", "Webpage");
  static ReactNative = new Tabs("ReactNative", "React Native");
  static iOS = new Tabs("iOS", "iOS");
  static Flutter = new Tabs("Flutter", "Flutter");
  static Java = new Tabs("Java", "Android: Java");
  static Maui = new Tabs("Maui", ".Net Maui");
  static AngularIonic = new Tabs("AngularIonic", "Ionic");
  static CaliberDroid = new Tabs("CaliberDroid", "CaliberDroid");
  static Capstone = new Tabs("Capstone", "Capstone");

  static AboutList = [
    this.Hello,
    this.Education,
    this.History,
    this.CaliberDroid,
    this.TodoList,
    this.Capstone,
    // this.Kotlin,
    // this.iOS,
    // this.Flutter,
    // this.ReactNative,
  ]


  // static AboutList = [
  //   this.Hello,
  //   this.About,
  //   this.Education,
  //   this.History,
  //   this.Projects,
  // ];

  static ProjectList = [
    this.Back,
    this.Kotlin,
    this.Java,
    this.ReactNative,
    this.iOS,
    this.Flutter,
    this.React,
    this.Maui,
    this.AngularIonic,
  ];

  constructor(name, text, icon = "") {
    this.name = name;
    this.text = text;
    this.icon = icon;
  }
  toString() {
    return `${this.name}`;
  }
}
