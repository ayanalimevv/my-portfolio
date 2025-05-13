import { List } from "./types";

export const ResumeLink =
  "https://drive.google.com/file/d/1mS4l2wRzh3oxMj-PBxjVtwDMKd0aVQf4/view";

const imageLinks = {
  folder: "./folder_icon.svg",
  pdf: "./pdf-icon.svg",
  x: "./x.svg",
  linkedin: "./linkedin.svg",
  github: "./github.svg",
  medium: "./medium.svg",
  app: "./app.svg",
  music: "./music.svg",
  typing: "./typing.svg",
  blog: "./blog.svg",
  movies: "./movies.svg",
  degree: "./degree.svg",
  hsc: "./hsc.svg",
  ssc: "./ssc.svg",
  html: "./html.svg",
  css: "./css.svg",
  javascript: "./javascript.svg",
  ts: "./ts.svg",
  tailwind: "./tailwind.svg",
  react: "./react.svg",
  instagram: "./instagram.svg",
};

// Utility functions to create components
const createIconItemsDetail = (name: string, image: string, link: string) => ({
  name,
  image,
  link,
});

const createProjectItemsDetail = (
  name: string,
  image: string,
  deployedLink: string,
  githubLink: string
) => ({
  name,
  image,
  deployedLink,
  githubLink,
});

const createListItemsDetail = (
  name: string,
  aboveText: string,
  image: string,
  belowText: string
) => ({
  name,
  aboveText,
  image,
  belowText,
});

const createSkillDetail = (name: string, image: string) => ({
  name,
  image,
});

// Home Page Components
export const HomePageComponents = [
  createIconItemsDetail("Blogs", imageLinks.folder, "/blogs"),
  createIconItemsDetail("Projects", imageLinks.folder, "/projects"),
  createIconItemsDetail("Socials", imageLinks.folder, "/socials"),
  createIconItemsDetail("Education", imageLinks.folder, "/education"),
  createIconItemsDetail("Skills", imageLinks.folder, "/skills"),
  createIconItemsDetail("Awards", imageLinks.folder, "/awards"),
  createIconItemsDetail("Additional", imageLinks.folder, "/additional"),
  createIconItemsDetail("Resume", imageLinks.pdf, ResumeLink),
  createIconItemsDetail(
    "Mail Me",
    "./mail.svg",
    `mailto:ayanalimevv@gmail.com,ayan787ali.mev@gmail.com`
  ),
];

// Social Links
export const SocialLinks = [
  createIconItemsDetail("X", imageLinks.x, "https://twitter.com/ayanalimevv"),
  createIconItemsDetail(
    "Linkedin",
    imageLinks.linkedin,
    "https://www.linkedin.com/in/ayanalimevv"
  ),
  createIconItemsDetail(
    "Github",
    imageLinks.github,
    "https://github.com/ayanalimevv"
  ),
  createIconItemsDetail(
    "Medium",
    imageLinks.medium,
    "https://medium.com/@ayanalimevv"
  ),
  createIconItemsDetail(
    "Instagram",
    imageLinks.instagram,
    "https://instagram.com/ayanalimevv"
  ),
];

export const BlogLinks = [
  createIconItemsDetail(
    "You Won’t Believe How Fast I Built This Typing Speed App in React!",
    "./blog.svg",
    "https://medium.com/@ayanalimevv/you-wont-believe-how-fast-i-built-this-typing-speed-app-in-react-0d466cbb5f59"
  ),
];

// Project Links
export const ProjectLinks = [
  createProjectItemsDetail(
    "YT Music Clone App",
    imageLinks.music,
    "https://alpha-yt-music.vercel.app/",
    "https://github.com/ayanalimevv/yt-music"
  ),
  createProjectItemsDetail(
    "MERN Blog Application",
    imageLinks.blog,
    "https://alpha-blog-frontend.vercel.app/",
    ""
  ),
  createProjectItemsDetail(
    "FilmSuggest App",
    imageLinks.movies,
    "https://alphaflix-three.vercel.app/",
    "https://github.com/ayanalimevv/alphaflix"
  ),
];

// Education Details
export const EducationDetails: List[] = [
  createListItemsDetail(
    "Bachelor of Technology - CSE",
    "2020 - 2024",
    imageLinks.degree,
    "CGPA: 7.9"
  ),
  createListItemsDetail(
    "HSC 12th RBSE BOARD",
    "2020",
    imageLinks.hsc,
    "Percentage: 82%"
  ),
  createListItemsDetail(
    "SSC 10th RBSE BOARD",
    "2018",
    imageLinks.ssc,
    "Percentage: 90%"
  ),
];

// Skills Details
export const SkillsDetails = [
  createSkillDetail("HTML", imageLinks.html),
  createSkillDetail("CSS", imageLinks.css),
  createSkillDetail("JS", imageLinks.javascript),
  createSkillDetail("Typescript", imageLinks.ts),
  createSkillDetail("Tailwind", imageLinks.tailwind),
  createSkillDetail("React", imageLinks.react),
];

// Awards Details
export const AwardsDetails: List[] = [
  createListItemsDetail(
    "#3 in Campus Code Debugging Competition",
    "2020",
    imageLinks.degree,
    "Got 3rd Position in campus wide coding competition."
  ),
];

// Additional Details
export const AdditionalDetails: List[] = [
  createListItemsDetail(
    "Speaker in Google Developer Club Event",
    "2022",
    imageLinks.degree,
    `I had the opportunity to speak on APIs at a GDSC event, engaging with an enthusiastic audience of 100 attendees!`
  ),
];
