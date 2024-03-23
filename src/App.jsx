import { useState, Fragment } from "react";
import "./css/App.css";
import "./css/Mobile.css";
import Entry from "./components/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import { tabs } from "./data/constants/tabs.js";
import myTabs from "./data/constants/tab_class.js";
import content from "./data/constants/content.js";
import { projects } from "./data/constants/project_tabs.js";
import { panels } from "./data/constants/panels.js";
import MyProjects from "./data/constants/projects_tabs_class.js";
import MyTabs from "./data/constants/tab_class.js";

function App() {
  const [tab, setTab] = useState(myTabs.Hello.name);
  const [panel, switchPanel] = useState(panels.About);
  var oldPanel = panel;

  function showPanel() {
    if (panel === panels.Projects) {
      //console.log("Switching to: PROJECTS");
      return <ButtonMenu panel={panels.Projects} onSelect={handleSelect} />;
    } else if (panel === panels.About) {
      //console.log("Switching to: ABOUTS");
      return <ButtonMenu panel={panels.About} onSelect={handleSelect} />;
    }
  }

  function handleSelect(value) {
    console.log(value);
    setTab(value.name);
    if (value.name === MyTabs.Back.name) {
      console.log("BACK button pressed");
      switchPanel(panels.About);
    } else if (value.name === MyTabs.Projects.name) {
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
