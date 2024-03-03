import { useState, Fragment } from "react";
import "./css/App.css";
import "./css/Mobile.css";
import Entry from "./components/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import { tabs } from "./data/constants/tabs.js";
import content from "./data/constants/content.js";
import { projects } from "./data/constants/project_tabs.js";

function App() {
  const [tab, setTab] = useState(tabs.Hello);

  function switchMenus() {
    if (
      tab === tabs.Projects ||
      (Object.keys(projects).includes(tab) && tab != projects.Back)
    ) {
      console.log("Switch to projects");
      return <ButtonMenu items={projects} onSelect={handleSelect} />;
    } else if (tab === projects.Back || Object.keys(tabs).includes(tab)) {
      console.log("Switch to abouts");
      return <ButtonMenu items={tabs} onSelect={handleSelect} />;
    }
  }

  function handleSelect(value) {
    console.log(value);
    setTab(value);
  }

  return (
    <Fragment>
      <main className="App">
        {switchMenus()}
        <Entry tab={tab} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
