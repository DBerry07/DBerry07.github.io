import {useState, Fragment} from "react";
import pageContent from "./data/constants/content.js";
import Entry from "./components/panel/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import myTabs from "./data/constants/my-tabs.js";
import NamePanel from "./components/NamePanel.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [tab, setTab] = useState(myTabs.Hello.name);
    const content = pageContent[tab];


    function handleSelect(value) {
        setTab(value);
    }

    return (
        <Fragment>
            <main className="App grid grid-cols-6 grid-rows-6 h-full w-full m-4">
                <ButtonMenu onSelect={handleSelect}/>
                <NamePanel/>
                <Entry content={content}/>
                {/*<Footer/>*/}
            </main>
        </Fragment>
    );
}

export default App;
