import { useState, Fragment } from "react";
import "./css/App.css";
import "./css/Mobile.css";
import Entry from "./components/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import { tabs } from "./data/constants/tabs.js";
import content from "./data/constants/content.js";
import { projects } from "./data/constants/project_tabs.js";
import { panels } from "./data/constants/panels.js";

function App() {
  const [tab, setTab] = useState(tabs.Hello);
  const [panel, switchPanel] = useState(panels.About);
  var oldPanel = panel;

  function showPanel() {
    if (panel === panels.Projects) {
      console.log("Switching to: PROJECTS");
      return <ButtonMenu items={projects} onSelect={handleSelect} />;
    } else if (panel === panels.About) {
      console.log("Switching to: ABOUTS");
      return <ButtonMenu items={tabs} onSelect={handleSelect} />;
    }
  }

  function handleSelect(value) {
    console.log("Tab selected: " + value);
    setTab(value);
    if (value === projects.Back) {
      console.log("BACK button pressed");
      switchPanel(panels.About);
    } else if (value === tabs.Projects) {
      console.log("PROJECTS button pressed");
      switchPanel(panels.Projects);
    }
  }

  return (
    <Fragment>
      <main className="App">
        {showPanel()}
        <Entry tab={tab} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
