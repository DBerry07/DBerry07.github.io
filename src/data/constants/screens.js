import MyContent from "../classes/MyContent.js"
import { LINKS } from "./links.js"

export const Hello = new MyContent(
    "Hello, there!",
    [
        [LINKS.linkedin, "LinkedIn"],
        [LINKS.github, "GitHub"],
    ],
    [
        // Intro page text
        "I am a software developer currently located in South Florida with nearly two years of professsional native Android app development experience.",
        "During my professional career, I have worked for Bank of America and for Accenture.",
        "I earned a Bachelor of Science in Computer Science from Florida Atlantic University in 2019.",
        "I have been described as detail-oriented and analytical.",
        "My passion for software development stems from my enjoyment of puzzle-solving and of building functional things.",
        "I am always eager to learn new things, particularly if those new things help me get better at my job.",
    ],
)

export const Webpage = new MyContent(
    "This Webpage",
    [
        [LINKS.blank, "GitHub Repo"],
    ],
    [
        "This webpage (hosted on GitHub Pages) is created with React and initially set up using Vite.", 
        "JSX, Components, and Hooks were all used to make the user interface and its interactability - as is the norm for React applications."
    ]
)

export const Coursera = new MyContent(
    "Coursera Project",
    [
        [LINKS.coursera, "GitFront Repo Display"],
    ],
    [
        // Coursera Project text
        "My project that I submittted to Coursera's Vanderbilt-developed Android developer specialization.",
        "This is a note-taking and -saving app. The user is able to write their own notes and save those notes to their local phone storage.", 
        "The notes are displayed using a RecyclerView in order of date created. Users can also edit a previously created note or delete a note.",
        "Contains all four of the major Android app components - Activities, Broadcast Receivers, Services, and Content Providers.", 
        "The app is written in Kotlin.",
    ],
    ["../../src/assets/coursera_video.mp4"],
)

export const Filler = new MyContent(
    "Filler",
    [
        [LINKS.blank, "Hello, World!"],
    ],
    [
        "filler", "filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler",
        "filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler",
        "filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler","filler",
    ]
)