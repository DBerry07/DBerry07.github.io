import * as content from "../data/content";

function Entry(props) {
  return (
    <div>
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
