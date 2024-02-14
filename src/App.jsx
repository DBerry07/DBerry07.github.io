import { useState } from "react";
import "./css/App.css";
import Entry from "./components/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  function handleSelect(value) {
    setCount(value);
  }

  return (
    <div className="App">
      <main>
        <ButtonMenu onSelect={handleSelect} />
        <Entry index={count} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
