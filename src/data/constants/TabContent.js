export default class TabContent {
  constructor(
    title = null,
    subheading = null,
    body = null,
    sections = null,
    htmls = null,
    list = null
  ) {
    this.title = title;
    this.subheading = subheading;
    this.body = body;
    this.sections = sections;
    this.htmls = htmls;
    this.list = list;
  }
}
