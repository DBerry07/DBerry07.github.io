export default function Subheading(data) {
  var subheading = null;

  if (Object.hasOwn(data, "subheading")) {
    subheading = (
      <div id="subheading">
        <i>{data.subheading}</i>
      </div>
    );
  } else {
    subheading = null;
  }

  return subheading;
}
