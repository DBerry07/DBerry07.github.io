import Title from "../../components/panel/Title.jsx";
import PanelHolder from "../../components/panel/PanelHolder.jsx";
import Subheading from "../../components/panel/Subheading.jsx";
import LinksBar from "../../components/panel/LinksBar.jsx";
import {LINKS} from "../constants/links.js";
import {locations} from "../constants/filelocs.js";
import PanelMainContent from "../../components/panel/PanelMainContent.jsx";
import Body from "../../components/panel/Body.jsx";
import {getText} from "../constants/fetching.js";
import List from "../../components/panel/List.jsx";

export const FlutterQuiz = [
     Title({ title: "Simple ToDo List" }),
     PanelHolder({
         items: [
             Subheading({ subheading: ["Personal Project", "Flutter Cross-platform"] }),
             LinksBar({
                 htmls: [
                     [LINKS.flutterquiz, locations.PicGithub],
                 ],
             }),
             PanelMainContent({
                 items: [
                     Body({ body: await getText(locations.FlutterQuizText) }),
                 ],
             }),
         ],
     }),
 ]