export default function Htmls(data) {
  var htmls = null;

  if (Object.hasOwn(data, "htmls")) {
    htmls = (
      <div id="link-bar">
        {data.htmls.map((html, index) => (
          <span key={index} className="link">
            <a href={html[0]} target="_blank" className="link-button">
              {html[1]}
            </a>
          </span>
        ))}
      </div>
    );
  } else {
    htmls = null;
  }

  return htmls;
}
