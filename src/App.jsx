import { useState } from "react";
import "./App.css";
import Entry from "./Entry.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Entry index={0} />
      <Entry index={1} />
    </div>
  );
}

export default App;
