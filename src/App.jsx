import { useEffect, useState, Fragment } from "react";
import "./css/App.css";
import "./css/Mobile.css";
import Entry from "./components/entry/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import myTabs from "./data/constants/buttons.js";
import { panels } from "./data/constants/panels.js";
import NamePanel from "./components/NamePanel.jsx";
import Drawer from "@mui/material/Drawer";

function App() {
  const [tab, setTab] = useState(myTabs.Hello.name);
  const [panel, switchPanel] = useState(panels.About);
  const [open, switchOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800; // Set your desired breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  function handleDrawer() {
    switchOpen(!open);
  }

  if (width > breakpoint) {
    return (
      <Fragment>
        <main className="App">
          <NamePanel />
          {showPanel()}
          <Entry tab={tab} />
        </main>
        <Footer />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <main className="App">
          <Drawer open={open} onClose={() => handleDrawer()}>
            {showPanel()}
          </Drawer>
          <Entry tab={tab} handleDrawerOpen={handleDrawer} />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
