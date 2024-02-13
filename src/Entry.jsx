import * as content from "./content";

function Entry(props) {
  return (
    <div>
      <h2>{content.titles[props.index]}</h2>
      <div>
        {content.text[props.index].map((item) => (
          <p> {item}</p>
        ))}
      </div>
    </div>
  );
}

export default Entry;
