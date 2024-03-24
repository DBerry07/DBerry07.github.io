export default function Body(data) {
  var body = null;
  if (Object.hasOwn(data, "body")) {
    body = (
      <div id="entry-body">
        {data.body.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  } else {
    body = null;
  }
  return body;
}
