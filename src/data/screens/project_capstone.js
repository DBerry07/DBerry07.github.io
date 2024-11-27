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

export const Capstone = [
  Title({ title: "Specialization Capstone" }),
  EntryBox({
    items: [
      Subheading({ subheading: ["Educational Project", "Native Android"] }),
      LinksBar({
        htmls: [
          [LINKS.coursera, locations.PicGithub],
          [LINKS.coursera_video, locations.PicYoutube],
          [LINKS.coursera_cert, locations.PicCoursera],
        ],
      }),
      EntryBody({
        items: [
          Body({ body: await getText(locations.CouseraBody) }),
          List({
            title: "Technologies Used",
            list: await getText(locations.CourseraTechs),
          }),
          SubSection({
            title: "Learnings",
            items: await getText(locations.CourseraLearnings),
          }),
          SubSection({
            title: "Why is this on Gitfront?",
            items: await getText(locations.CourseraGitfront),
          }),
          SubSection({
            title: "Why isn't this on the Play Store?",
            items: await getText(locations.CourseraDisc),
          }),
        ],
      }),
    ],
  }),
];
