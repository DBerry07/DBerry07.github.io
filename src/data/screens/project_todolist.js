import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import TabContent from "../constants/TabContent.js";
import MyList from "../myList.js";
import Title from "../../components/entry/Title.jsx";
import Subheading from "../../components/entry/Subheading.jsx";
import EntryBox from "../../components/entry/EntryBox.jsx";
import Techs from "../../components/entry/Techs.jsx";
import Body from "../../components/entry/Body.jsx";
import EntryBody from "../../components/entry/EntryBody.jsx";
import Htmls from "../../components/entry/Htmls.jsx";
import List from "../../components/entry/List.jsx";
import SubSection from "../../components/entry/SubSection.jsx";

export const TodoList = [
  Title({ title: "Simple ToDo List" }),
  EntryBox({
    items: [
      Subheading({ subheading: ["Personal Project", "Native Android"] }),
      Htmls({
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
