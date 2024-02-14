import { useState } from "react";
import "./css/App.css";
import Entry from "./components/Entry.jsx";
import * as content from "./data/content.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <menu>
        <button onClick={() => setCount(0)}>
          {content.pageContent[0].title}
        </button>
        <button onClick={() => setCount(1)}>
          {content.pageContent[1].title}
        </button>
        <button onClick={() => setCount(2)}>
          {content.pageContent[2].title}
        </button>
      </menu>
      <div id="content-box">
        <Entry index={count} />
      </div>
    </div>
  );
}

export default App;
