export default class Tabs {
  static Hello = new Tabs("Hello", "Hello, There!");
  static About = new Tabs("About", "About Me");
  static Education = new Tabs("Education", "My Education");
  static History = new Tabs("History", "Work History");
  static Projects = new Tabs("Projects", "Projects");
  static Back = new Tabs("Back", "Back");
  static Kotlin = new Tabs("Kotlin", "Android: Kotlin");
  static ReactNative = new Tabs("ReactNative", "React Native");
  static iOS = new Tabs("iOS", "iOS");
  static DartFlutter = new Tabs("DartFlutter", "Flutter");
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
    this.DartFlutter,
  ];

  constructor(name, text) {
    this.name = name;
    this.text = text;
  }
  toString() {
    return `${this.name}`;
  }
}
