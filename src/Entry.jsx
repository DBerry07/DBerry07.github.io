import * as content from "./content";

function Entry(index) {
  return (
    <div>
      <h2>{content.titles[index]}</h2>
      <div>
        {content.text[index].map((item) => (
          <p> {item}</p>
        ))}
      </div>
    </div>
  );
}

export default Entry;
