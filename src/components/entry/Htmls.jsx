// import "./htmls.css";

export default function Htmls({ htmls }) {
  if (htmls != null) {
    return (
      <div id="link-bar">
        {htmls.map((html, index) => (
          <span key={index} className="link">
            <a href={html[0]} target="_blank">
              <img src={html[1]} className="link-img" />
            </a>
          </span>
        ))}
      </div>
    );
  }
}
