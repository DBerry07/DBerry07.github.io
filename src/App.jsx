import { useEffect, useState, Fragment } from "react";
import "./css/App.css";
import "./css/Mobile.css";
import pageContent from "./data/constants/content.js";
import Entry from "./components/entry/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import myTabs from "./data/constants/buttons.js";
import { panels } from "./data/constants/panels.js";
import NamePanel from "./components/NamePanel.jsx";
import Drawer from "@mui/material/Drawer";
import Title from "./components/entry/Title.jsx";
import Body from "./components/entry/Body.jsx";
import Subheading from "./components/entry/Subheading.jsx";
import Sections from "./components/entry/Sections.jsx";
import Htmls from "./components/entry/Htmls.jsx";
import List from "./components/entry/List.jsx";

function App() {
  const [tab, setTab] = useState(myTabs.Hello.name);
  const [panel, setPanel] = useState(panels.About);
  const content = pageContent[tab];
  // const [open, switchOpen] = useState(false);

  // const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 800; // Set your desired breakpoint

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  function handleSelect(value) {
    // console.log("> tab selected: " + value);
    if (value === myTabs.Projects) {
      setPanel(panels.Projects);
    } else if (value === myTabs.Back) {
      setPanel(panels.About);
    } else {
      setTab(value);
    }
  }

  // function handleDrawer() {
  //   switchOpen(!open);
  // }

  // if (width > breakpoint) {
  return (
    <Fragment>
      <main className="App">
        <ButtonMenu panel={panel} onSelect={handleSelect} />
        <Entry
          title={<Title title={content.title} />}
          body={<Body body={content.body} />}
          htmls={<Htmls htmls={content.htmls} />}
          subheading={<Subheading subheading={content.subheading} />}
          sections={<Sections sections={content.sections} />}
          list={<List list={content.list} />}
        />
      </main>
      <Footer />
    </Fragment>
  );
  // }
  // else {
  //   return (
  //     <Fragment>
  //       <main className="App">
  //         <Drawer open={open} onClose={() => handleDrawer()}>
  //           {showPanel()}
  //         </Drawer>
  //         <Entry tab={tab} handleDrawerOpen={handleDrawer} />
  //       </main>
  //       <Footer />
  //     </Fragment>
  //   );
  // }
}

export default App;
