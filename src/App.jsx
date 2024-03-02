import { useState, Fragment } from "react";
import "./css/App.css";
import "./css/Mobile.css";
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
    <Fragment>
      <main className="App">
        <ButtonMenu onSelect={handleSelect} />
        <Entry tab={tab} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
