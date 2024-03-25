export default class MyProjects {
  static Back = new MyProjects("Back", "Back");
  static Kotlin = new MyProjects("Kotlin", "Android: Kotlin");
  static ReactNative = new MyProjects("ReactNative", "React Native");
  static iOS = new MyProjects("iOS", "iOS");
  static DartFlutter = new MyProjects("DartFlutter", "Flutter");
  static Java = new MyProjects("Java", "Android: Java");

  static List = [
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
