export default class Tabs {
  static Hello = new Tabs("Hello", "Hello, there!");
  static About = new Tabs("About", "About Me");
  static Education = new Tabs("Education", "My Education");
  static History = new Tabs("History", "Work History");
  static Projects = new Tabs("Projects", ">> Projects");

  static Back = new Tabs("Back", "<< Back");
  static Kotlin = new Tabs("Kotlin", "Capstone");
  static React = new Tabs("React", "Website");
  static ReactNative = new Tabs("ReactNative", "React Native");
  static iOS = new Tabs("iOS", "iOS");
  static Flutter = new Tabs("Flutter", "Flutter");
  static Java = new Tabs("Java", "Android: Java");

  static AboutList = [
    this.Hello,
    this.About,
    this.Education,
    this.History,
    this.Projects,
  ];

  static ProjectList = [
    this.Back,
    this.Kotlin,
    this.Java,
    this.ReactNative,
    this.iOS,
    this.Flutter,
    this.React,
  ];

  constructor(name, text) {
    this.name = name;
    this.text = text;
  }
  toString() {
    return `${this.name}`;
  }
}
