import { LINKS } from "./links.js";
import { locations } from "./filelocs.js";
import { getText } from "./fetching.js";
import TabContent from "./TabContent.js";
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

export const React = new TabContent(
  "This Webpage", //title
  ["Personal Project"], //subheading
  await getText(locations.ReactBody), //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.ReactLearnings)], //sections
  [[LINKS.webpage, locations.PicGithubTxt]], //htmls
  null, //list,
  ["Javascript", "JSX", "React", "Vite", "Visual Studio Code"] //techs
);

export const Cappy = new TabContent(
  "Vanderbilt Specialization Capstone ", //title
  ["Personal Project"], //subheading
  await getText(locations.CouseraBody), //body --> "await" here is very important! Page won't work without it!
  [
    await getText(locations.CourseraLearnings),
    await getText(locations.CourseraGitfront),
    await getText(locations.CourseraDisc),
  ], //sections
  [
    [LINKS.coursera, locations.PicGithubTxt],
    [LINKS.coursera_video, locations.PicYoutube],
    [LINKS.coursera_cert, locations.PicCoursera],
  ], //htmls
  await getText(locations.CouseraList), //list
  ["Kotlin", "Android Jetpack", "XML UI Design", "Volley", "Android Studio"] //techs
);

export const Capstone = [
  Title({ title: "Vanderbilt Specialization Capstone" }),
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

export const Kotlin = new TabContent(
  "Residental Manager", //title
  ["Native Android App", "Personal Project"], //subheading
  await getText(locations.AndroidKotlinBody), //body
  null, //sections
  [[LINKS.residental, locations.PicGithubTxt]], //htmls
  null, //list
  ["Kotlin", "Jetpack Compose", "Android Jetpack", "Android Studio"] //techs
);

export const Java = new TabContent(
  "Native Android App (Java)", //title
  ["Native Android App", "Personal Project"], //subheading
  await getText(locations.AndroidKotlinBody), //body --> "await" here is very important! Page won't work without it!
  null, //sections
  null, //htmls
  null, //list
  ["Java", "Android Studio"] //techs
);

export const ReactNative = new TabContent(
  "React Native App", //title
  ["Personal Project"], //subheading
  await getText(locations.ReactNativeBody), //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.ReactNativeLearnings)] //sections
);

export const iOS = new TabContent(
  "Native iOS App", //title
  ["Personal Project"], //subheading
  ["Put description", "and videos", "and screenshots", "of my iOS app", "here"], //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.IOSLearnings)], //sections
  null, //htmls
  null, //list
  ["Swift", "Xcode", "MacOS"] //techs
);

export const Flutter = new TabContent(
  "Pet Food Log", //title
  ["Personal Project"], //subheading
  await getText(locations.FlutterText), //body --> "await" here is very important! Page won't work without it!
  [await getText(locations.FlutterLearnings)], //sections
  [[LINKS.flutter, locations.PicGithubTxt]], //htmls
  null, //list
  ["Dart", "Flutter", "Android Studio"] //techs
);

// export const Spring = new TabContent(
//   "Spring Boot Project", //title
//   null, //subheading
//   [
//     "Put description,",
//     "screenshots, and videos,",
//     "of my Spring Boot (or maybe just Spring) project",
//     "HERE",
//   ] //body --> "await" here is very important! Page won't work without it!
// );

export const AngularIonic = new TabContent(
  "Ionic Project", //title
  ["Personal Project"], //subheading
  ["TO BE DONE"], //body --> "await" here is very important! Page won't work without it!
  null, //sections
  null, //htmls
  null, //list
  ["Javascript", "Angular", "Ionic"] //techs
);

export const Maui = new TabContent(
  "dotNet Maui Project", //title
  ["Personal Project"], //subheading
  ["To be learned and done"], //body --> "await" here is very important! Page won't work without it!
  null, //sections
  null, //htmls
  null, //list
  ["C# (C-sharp)", ".NET Maui", "Visual Studio 2022"] //techs
);

export const Caliber = new TabContent(
  "CaliberDroid", //title
  ["Native Android App", "Professional Project"],
  await getText(locations.CaliberText), //body
  null, //sections
  [[LINKS.caliber, locations.PicGithubTxt]], //htmls
  null,
  ["Kotlin", "Views UI Framework", "Retrofit", "Android Studio", "Postman"]
);

export const CaliberDroid = [
  Title({ title: "CaliberDroid"}),
  EntryBox({items:[
    Subheading({subheading: ["Professional Project", "Native Android"]}),
  Htmls({ htmls: [
    [LINKS.caliber, locations.PicGithubTxt]
  ]}),
  EntryBody({items:[
    Body({body: await getText(locations.CaliberText)}),
    List({
      title: "QC Manager abilities",
      list: await getText(locations.CaliberQC),
    }),
    List({
      title: "Trainer abilities",
      list: await getText(locations.CaliberTrainers),
    }),
    List({
      title: "My Roles & Responsibilities",
      list: await getText(locations.CaliberRoles)}),
      List({
        title: "Technologies Used",
        list: await getText(locations.CaliberTechs),
      }),
    ]}),
    
  ]})
  
]
