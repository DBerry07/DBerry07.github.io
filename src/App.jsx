import { useState } from "react";
import "./css/App.css";
import Entry from "./components/Entry.jsx";
import { titles } from "./data/content.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <menu>
        <button onClick={() => setCount(0)}>{titles[0]}</button>
        <button onClick={() => setCount(1)}>{titles[1]}</button>
      </menu>
      <div id="content-box">
        <Entry index={count} />
      </div>
    </div>
  );
}

export default App;
