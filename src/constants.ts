export const ResumeLink =
  "https://drive.google.com/file/d/1U8daZXQEkn8GSiQo5P-Nb6yhiw_eGXZe/view";

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
const createComponent = (name: string, image: string, link: string) => ({
  name,
  image,
  link,
});

const createSocialLink = (name: string, image: string, link: string) => ({
  name,
  image,
  link,
});

const createProjectLink = (
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

const createEducationDetail = (
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
  createComponent("Blogs", imageLinks.folder, "/blogs"),
  createComponent("Projects", imageLinks.folder, "/projects"),
  createComponent("Socials", imageLinks.folder, "/socials"),
  createComponent("Education", imageLinks.folder, "/education"),
  createComponent("Skills", imageLinks.folder, "/skills"),
  createComponent("Awards", imageLinks.folder, "/awards"),
  createComponent("Additional", imageLinks.folder, "/additional"),
  createComponent("Resume", imageLinks.pdf, ResumeLink),
  createComponent(
    "Mail Me",
    "./mail.svg",
    `mailto:ayanalimevv@gmail.com,ayan787ali.mev@gmail.com`
  ),
];

// Social Links
export const SocialLinks = [
  createSocialLink("X", imageLinks.x, "https://twitter.com/ayanalimevv"),
  createSocialLink(
    "Linkedin",
    imageLinks.linkedin,
    "https://www.linkedin.com/in/ayanalimevv"
  ),
  createSocialLink("Github", imageLinks.github, "https://github.com/alpha2207"),
  createSocialLink(
    "Medium",
    imageLinks.medium,
    "https://medium.com/@ayanalimev"
  ),
  createSocialLink(
    "Instagram",
    imageLinks.instagram,
    "https://instagram.com/ayanalimev"
  ),
];

export const BlogLinks = [
  createSocialLink(
    "You Won’t Believe How Fast I Built This Typing Speed App in React!",
    "./blog.svg",
    "https://medium.com/@ayanalimevv/you-wont-believe-how-fast-i-built-this-typing-speed-app-in-react-0d466cbb5f59"
  ),
];

// Project Links
export const ProjectLinks = [
  createProjectLink(
    "YT Music Clone App",
    imageLinks.music,
    "https://alpha-yt-music.vercel.app/",
    "https://github.com/ayanalimevv/yt-music",
  ),
  createProjectLink(
    "Mern Blog Application",
    imageLinks.blog,
    "https://alpha-blog-frontend.vercel.app/",
    "",
  ),
  createProjectLink(
    "FilmSuggest App",
    imageLinks.movies,
    "https://alphaflix-three.vercel.app/",
    "https://github.com/ayanalimevv/alphaflix",
  ),
];

// Education Details
export const EducationDetails = [
  createEducationDetail(
    "Bachelor of Technology - CSE",
    "2020 - 2024",
    imageLinks.degree,
    "CGPA: 7.9"
  ),
  createEducationDetail(
    "HSC 12th RBSE BOARD",
    "2020",
    imageLinks.hsc,
    "Percentage: 82%"
  ),
  createEducationDetail(
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
export const AwardsDetails = [
  createEducationDetail(
    "#3 in Campus Code Debugging Competition",
    "2020",
    imageLinks.degree,
    "Got 3rd Position in campus wide coding competition."
  ),
];

// Additional Details
export const AdditionalDetails = [
  createEducationDetail(
    "Speaker in Google Developer Club Event",
    "2022",
    imageLinks.degree,
    `I had the opportunity to speak on APIs at a GDSC event, engaging with an enthusiastic audience of 100 attendees!`
  ),
];
