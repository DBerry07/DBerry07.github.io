import { useState } from "react";
import "./App.css";
import * as content from "./content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {Entry(0)}
      {Entry(1)}
    </div>
  );
}

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

export default App;
