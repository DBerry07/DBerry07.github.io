import * as content from "../data/content";
import "../css/Entry.css";

function Entry(props) {
  const entry = content.pageContent[props.index];
  const htmls = entry.htmls;

  return (
    <div id="content-box">
      <h2>{entry.title}</h2>
      {htmls.map((item) => (
        <a href={item[0]} target="_blank">
          {item[1]}
        </a>
      ))}

      <div>
        {entry.body.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Entry;
