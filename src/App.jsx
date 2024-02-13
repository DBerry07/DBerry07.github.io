import { useState } from "react";
import "./css/App.css";
import Entry from "./components/Entry.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <menu>
        <button onClick={() => setCount(0)}>Hello!</button>
        <button onClick={() => setCount(1)}>Coursera</button>
      </menu>
      <box>
        <Entry index={count} />
      </box>
    </div>
  );
}

export default App;
