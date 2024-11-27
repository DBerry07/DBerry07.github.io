import {useEffect, useState, Fragment} from "react";
import {CSSTransition} from "react-transition-group";
import pageContent from "./data/constants/content.js";
import Entry from "./components/entry/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import myTabs from "./data/constants/my-tabs.js";
import {panels} from "./data/constants/panels.js";
import NamePanel from "./components/NamePanel.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [tab, setTab] = useState(myTabs.Hello.name);
    const [panel, setPanel] = useState(panels.About);
    const content = pageContent[tab];


    function handleSelect(value) {
        changePanel(value);
    }

    function changePanel(value) {
        if (value === myTabs.Projects) {
            setPanel(panels.Projects);
            setTab(myTabs.ProjectList[1].name);
        } else if (value === myTabs.Back) {
            setPanel(panels.About);
            setTab(myTabs.Panels[0].name);
        } else {
            setTab(value);
        }
    }

    return (
        <Fragment>
            <main className="App grid grid-cols-6 grid-rows-6 h-full w-full m-4">
                <ButtonMenu onSelect={handleSelect}/>
                <NamePanel/>
                <Entry content={content}/>
                <Footer/>
            </main>
        </Fragment>
    );
}

export default App;
