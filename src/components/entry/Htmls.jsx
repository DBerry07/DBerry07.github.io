// import "./htmls.css";

export default function Htmls({ htmls }) {
  if (htmls != null) {
    return (
        <div className="w-full items-center">
      <div id="link-bar" className="p-2 w-fit">
        {htmls.map((html, index) => (
          <span key={index} className="link">
            <a href={html[0]} target="_blank" className="w-0">
              <img src={html[1]} className="link-img h-6" />
            </a>
          </span>
        ))}
      </div>
        </div>
    );
  }
}
