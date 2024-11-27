import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import TabContent from "../constants/TabContent.js";
import MyList from "../myList.js";
import Title from "../../components/panel/Title.jsx";
import Subheading from "../../components/panel/Subheading.jsx";
import EntryBox from "../../components/panel/EntryBox.jsx";
import Techs from "../../components/panel/Techs.jsx";
import Body from "../../components/panel/Body.jsx";
import EntryBody from "../../components/panel/EntryBody.jsx";
import LinksBar from "../../components/panel/LinksBar.jsx";
import List from "../../components/panel/List.jsx";
import SubSection from "../../components/panel/SubSection.jsx";

export const TodoList = [
  Title({ title: "Simple ToDo List" }),
  EntryBox({
    items: [
      Subheading({ subheading: ["Personal Project", "Native Android"] }),
      LinksBar({
        htmls: [
          [LINKS.todolist, locations.PicGithub],
          // [LINKS.todolist_page, locations.PicWebpage],
        ],
      }),
      EntryBody({
        items: [
          Body({ body: await getText(locations.TodoListBody) }),
          List({
            title: "Technologies Used",
            list: [
              "Kotlin",
              "Firebase Firestore",
              "Jetpack Compose",
              "MVVM Design Pattern",
              "Android Studio",
              "Android Design Patterns",
              "Android Operating System Architecture",
              "Android SDK",
            ],
          }),
          List({
            title: "Future Plans",
            list: await getText(locations.TodoListList),
          }),
        ],
      }),
    ],
  }),
];
