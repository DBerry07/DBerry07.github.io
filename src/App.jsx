import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "./App.css";
import * as content from "./content";

function App() {
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
