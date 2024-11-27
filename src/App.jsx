import {useState, Fragment} from "react";
import pageContent from "./data/constants/content.js";
import Entry from "./components/panel/Entry.jsx";
import ButtonMenu from "./components/ButtonMenu.jsx";
import myTabs from "./data/constants/my-tabs.js";
import NamePanel from "./components/NamePanel.jsx";
import Footer from "./components/Footer.jsx";
import {Drawer} from "@mui/material";
import {useMediaQuery} from "react-responsive";

function App() {
    const [tab, setTab] = useState(myTabs.Hello.name);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const content = pageContent[tab];

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })


    function handleSelect(value) {
        setTab(value);
    }

    const openDrawer = () => {setDrawerOpen(true);};
    const closeDrawer = () => {setDrawerOpen(false);};

    var buttons = undefined;


    if (isDesktopOrLaptop) {
        buttons = (<Fragment><ButtonMenu onSelect={handleSelect} /><NamePanel /></Fragment>)
    } else {
        buttons = (<Fragment>
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <ButtonMenu onSelect={handleSelect}/>
            </Drawer>
            <NamePanel>
                <button onClick={openDrawer}><img src="/assets/icons8-menu-150.png" className='h-6'/></button>
            </NamePanel>
        </Fragment>)
    }

    return (
        <Fragment>
        <main className="App grid grid-rows-8 overflow-x-hidden ml-2 sm:mt-1 mr-2 lg:grid-cols-12 lg:grid-rows-12 lg:gap-4 h-full w-full">
                {buttons}

                <Entry content={content}/>
                {/*<Footer/>*/}
            </main>
        </Fragment>
    );
}

export default App;
