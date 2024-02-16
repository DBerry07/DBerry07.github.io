import { useState } from "react";
import "./css/App.css";
import Entry from "./components/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import { Tab } from "./data/constants.js";

function App() {
  const [count, setCount] = useState(0);
  const entries = Object.keys(Tab);

  function handleSelect(value) {
    setCount(value);
  }

  return (
    <div className="App">
      <main>
        <ButtonMenu onSelect={handleSelect} />
        <Entry screen={entries[count]} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
