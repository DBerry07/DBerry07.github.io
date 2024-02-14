import { useState } from "react";
import "./css/App.css";
import Entry from "./components/Entry.jsx";
import * as content from "./data/content.js";
import ButtonMenu from "./components/ButtonMenu.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ButtonMenu />
      <div id="content-box">
        <Entry index={count} />
      </div>
    </div>
  );
}

export default App;
