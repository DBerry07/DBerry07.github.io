import {MyContent} from "./MyContent.js"

export const pageContent = [
    new MyContent(
        "Hello, there!",
        [
            // Intro page text
            "I am a software developer currently located in South Florida with nearly two years of professsional native Android app development experience.",
            "During my professional career, I have worked for Bank of America and for Accenture.",
            "I earned a Bachelor of Science in Computer Science from Florida Atlantic University in 2019.",
            "I have been described as detail-oriented and analytical.",
            "My passion for software development stems from my enjoyment of puzzle-solving and of building functional things.",
            "I am always eager to learn new things, particularly if those new things help me get better at my job.",
        ],
    ),
    new MyContent(
        "Coursera Project",
        [
            // Coursera Project text
            "My project that I submittted to Coursera's Vanderbilt-developed Android developer specialization.",
            "This is a note-taking and -saving app. The user is able to write their own notes and save those notes to their local phone storage.", 
            "The notes are displayed using a RecyclerView in order of date created. Users can also edit a previously created note or delete a note.",
            "Contains all four of the major Android app components - Activities, Broadcast Receivers, Services, and Content Providers.", 
            "The app is written in Kotlin.",
        ]
    ),
    new MyContent(),
]

export const titles = [
    "Hello, there!",
    "Coursera Project",
]

export const text = [
    [
        // Intro page text
        "I am a software developer currently located in South Florida with nearly two years of professsional native Android app development experience.",
        "During my professional career, I have worked for Bank of America and for Accenture.",
        "I earned a Bachelor of Science in Computer Science from Florida Atlantic University in 2019.",
        "I have been described as detail-oriented and analytical.",
        "My passion for software development stems from my enjoyment of puzzle-solving and of building functional things.",
        "I am always eager to learn new things, particularly if those new things help me get better at my job.",
    ],
    [
        // Coursera Project text
        "My project that I submittted to Coursera's Vanderbilt-developed Android developer specialization.",
        "This is a note-taking and -saving app. The user is able to write their own notes and save those notes to their local phone storage.", 
        "The notes are displayed using a RecyclerView in order of date created. Users can also edit a previously created note or delete a note.",
        "Contains all four of the major Android app components - Activities, Broadcast Receivers, Services, and Content Providers.", 
        "The app is written in Kotlin.",
    ]
]