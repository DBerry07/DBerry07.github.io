import { useState } from "react";
import "./css/App.css";
import Entry from "./components/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import { tabs } from "./data/constants/tabs.js";
import content from "./data/constants/content.js";

function App() {
  const [tab, setTab] = useState(tabs.Hello);

  function handleSelect(value) {
    setTab(value);
  }

  return (
    <div className="App">
      <main className="">
        <ButtonMenu onSelect={handleSelect} />
        <Entry tab={tab} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
