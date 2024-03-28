import { useState, Fragment } from "react";
import "./css/App.css";
import "./css/Mobile.css";
import Entry from "./components/entry/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import myTabs from "./data/constants/buttons.js";
import { panels } from "./data/constants/panels.js";
import NamePanel from "./components/NamePanel.jsx";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

function App() {
  const [tab, setTab] = useState(myTabs.Hello.name);
  const [open, setOpen] = useState(false);
  const [panel, switchPanel] = useState(panels.About);
  var oldPanel = panel;

  function showPanel() {
    if (panel === panels.Projects) {
      // console.log("Switching to: PROJECTS");
      return <ButtonMenu panel={panels.Projects} onSelect={handleSelect} />;
    } else if (panel === panels.About) {
      // console.log("Switching to: ABOUTS");
      return <ButtonMenu panel={panels.About} onSelect={handleSelect} />;
    }
  }

  function handleSelect(value) {
    // console.log(value);
    setTab(value.name);
    if (value.name === myTabs.Back.name) {
      // console.log("BACK button pressed");
      switchPanel(panels.About);
    } else if (value.name === myTabs.Projects.name) {
      // console.log("PROJECTS button pressed");
      switchPanel(panels.Projects);
    }
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = showPanel();

  return (
    <Fragment>
      <main className="App">
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <NamePanel />
        {/* {showPanel()} */}
        <Entry tab={tab} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
