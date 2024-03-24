export default function Title(data) {
  var title = null;
  if (Object.hasOwn(data, "title")) {
    title = <div id="title">{data.title}</div>;
  } else {
    title = null;
  }
  return title;
}
