import * as content from "../data/content";
import "../css/Entry.css";

function Entry(props) {
  return (
    <div id="content-box">
      <h2>{content.pageContent[props.index].title}</h2>
      <div>
        {content.pageContent[props.index].body.map((item) => (
          <p> {item}</p>
        ))}
      </div>
    </div>
  );
}

export default Entry;
