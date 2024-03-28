import { useState, Fragment } from "react";
import "./css/App.css";
import "./css/Mobile.css";
import Entry from "./components/entry/Entry.jsx";
import Footer from "./components/Footer.jsx";
import myTabs from "./data/constants/buttons.js";
import { panels } from "./data/constants/panels.js";
import Button from "@mui/material/Button";
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx";

function App() {
  const [tab, setTab] = useState(myTabs.Hello.name);
  const [open, setOpen] = useState(false);

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

  function handleOpen(value) {
    setOpen(!open);
  }

  return (
    <Fragment>
      <main className="App">
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <ResponsiveDrawer
          handleSelect={handleSelect}
          handleOpen={handleOpen}
          open={open}
        />
        <Entry tab={tab} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
