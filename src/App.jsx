import { useEffect, useState, Fragment } from "react";
import {CSSTransition} from "react-transition-group";
// import "./css/App.css";
// import "./css/Mobile.css";
// import "./css/animations-entry.css";
// import "./css/constants.css";
import pageContent from "./data/constants/content.js";
import Entry from "./components/entry/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import Footer from "./components/Footer.jsx";
import myTabs from "./data/constants/my-tabs.js";
import { panels } from "./data/constants/panels.js";
import NamePanel from "./components/NamePanel.jsx";
import MyDrawer from "./components/MyDrawer.jsx";
import NamePanelWithDrawerButton from "./components/NamePanelWithDrawerButton.jsx";
import { isMobile } from "react-device-detect";

function App() {
  const [tab, setTab] = useState(myTabs.Hello.name);
  const [panel, setPanel] = useState(panels.About);
  const [isEnter, setIsEnter] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const content = pageContent[tab];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log("Hello");
  }

  // const [open, switchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSelect(value) {
    // console.log("> tab selected: " + value);
    setIsEnter((prevState) => !prevState)
    setIsDrawerOpen(false)
    setTimeout(() => changePanel(value), 400);
  }

  function changePanel(value) {
    if (value === myTabs.Projects) {
      setPanel(panels.Projects);
      setTab(myTabs.ProjectList[1].name);
    } else if (value === myTabs.Back) {
      setPanel(panels.About);
      setTab(myTabs.AboutList[0].name);
    } else {
      setTab(value);
    }
    setIsEnter((prevState) => !prevState)
  }

  // function handleDrawer() {
  //   switchOpen(!open);
  // }

  if (!isMobile) {
    return (
      <Fragment>
        <main className="App">
          <NamePanel />
          <ButtonMenu panel={panel} onSelect={handleSelect} />
          <CSSTransition in={isEnter} timeout={5000} appear={true} classNames="entry-animate">
            <Entry content={content} />
            {/* <Entry
              title={<Title title={content.title} />}
              techs={<Techs techs={content.techs} />}
              body={<Body body={content.body} />}
              htmls={<Htmls htmls={content.htmls} />}
              subheading={<Subheading subheading={content.subheading} />}
              sections={<Sections sections={content.sections} />}
              list={<List list={content.list} />}
            /> */}
          </CSSTransition>
        </main>
        <Footer />
      </Fragment>
    );
  }
  else if (isMobile) {
    return (
      <Fragment>
        <main className="App">
          <NamePanelWithDrawerButton onClick={toggleDrawer}/>
          <MyDrawer isOpen={isDrawerOpen}>
            <ButtonMenu panel={panel} onSelect={handleSelect} />
          </MyDrawer>
          <CSSTransition in={isEnter} timeout={5000} appear={true} classNames="entry-animate">
            <Entry content={content} />
          </CSSTransition>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
