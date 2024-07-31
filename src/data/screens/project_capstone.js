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

export const Capstone = [
  Title({ title: "Specialization Capstone" }),
  EntryBox({
    items: [
      Subheading({ subheading: ["Educational Project", "Native Android"] }),
      Htmls({
        htmls: [
          [LINKS.coursera, locations.PicGithubTxt],
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
