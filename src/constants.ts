export const ResumeLink = "https://drive.google.com/file/d/1lDxyCMjpLeAvfGqBzfbt9iUGFkGyjuS1/view";

const imageLinks = {
    folder: "./folder_icon.svg",
    pdf: "./pdf-icon.svg",
    x: './x.svg',
    linkedin: './linkedin.svg',
    github: './github.svg',
    medium: './medium.svg',
    app: './app.svg',
    music: './music.svg',
    typing: './typing.svg',
    blog: './blog.svg',
    movies: './movies.svg',
    degree: './degree.svg',
    hsc: './hsc.svg',
    ssc: './ssc.svg',
    html: './html.svg',
    css: './css.svg',
    javascript: './javascript.svg',
    ts: './ts.svg',
    tailwind: './tailwind.svg',
    react: './react.svg',
};

// Define types for the components
interface HomePageComponent {
    image: string;
    name: string;
    link: string;
}

interface SocialLink {
    name: string;
    image: string;
    link: string;
}

interface ProjectLink {
    name: string;
    image: string;
    deployedLink: string;
    githubLink: string;
    pageLink: string;
}

interface EducationDetail {
    name: string;
    aboveText: string;
    image: string;
    belowText: string;
}

interface SkillDetail {
    name: string;
    image: string;
}

// Utility functions to create components
const createComponent = (name: string, image: string, link: string): HomePageComponent => ({ name, image, link });

const createSocialLink = (name: string, image: string, link: string): SocialLink => ({ name, image, link });

const createProjectLink = (name: string, image: string, deployedLink: string, githubLink: string, pageLink: string): ProjectLink => ({
    name,
    image,
    deployedLink,
    githubLink,
    pageLink,
});

const createEducationDetail = (name: string, aboveText: string, image: string, belowText: string): EducationDetail => ({
    name,
    aboveText,
    image,
    belowText,
});

const createSkillDetail = (name: string, image: string): SkillDetail => ({ name, image });

// Home Page Components
export const HomePageComponents: HomePageComponent[] = [
    createComponent("Blogs", imageLinks.folder, '/blogs'),
    createComponent("Projects", imageLinks.folder, '/projects'),
    createComponent("Socials", imageLinks.folder, '/socials'),
    createComponent("Education", imageLinks.folder, '/education'),
    createComponent("Skills", imageLinks.folder, '/skills'),
    createComponent("Awards", imageLinks.folder, '/awards'),
    createComponent("Additional", imageLinks.folder, '/additional'),
    createComponent("Resume", imageLinks.pdf, ResumeLink),
];

// Social Links
export const SocialLinks: SocialLink[] = [
    createSocialLink("X", imageLinks.x, 'https://twitter.com/ayanalimevv'),
    createSocialLink("Linkedin", imageLinks.linkedin, 'https://www.linkedin.com/in/ayanalimevv'),
    createSocialLink("Github", imageLinks.github, 'https://github.com/alpha2207'),
    createSocialLink("Medium", imageLinks.medium, 'https://medium.com/@ayanalimev'),
    createSocialLink("Instagram", imageLinks.x, 'https://instagram.com/ayanalimev'),
];

// Project Links
export const ProjectLinks: ProjectLink[] = [
    createProjectLink("YT Music Clone App", imageLinks.music, 'https://medium.com/@ayanalimev', "", "/yt-music"),
    createProjectLink("Typing Speed Calculator", imageLinks.typing, 'https://medium.com/@ayanalimev', "", ""),
    createProjectLink("Mern Blog Application", imageLinks.blog, 'https://medium.com/@ayanalimev', "", ""),
    createProjectLink("FilmSuggest App", imageLinks.movies, 'https://medium.com/@ayanalimev', "", ""),
];

// Education Details
export const EducationDetails: EducationDetail[] = [
    createEducationDetail("Bachelor of Technology - CSE", '2020 - 2024', imageLinks.degree, 'CGPA: 7.9'),
    createEducationDetail("HSC 12th RBSE BOARD", '2020', imageLinks.hsc, 'Percentage: 82%'),
    createEducationDetail("SSC 10th RBSE BOARD", '2018', imageLinks.ssc, 'Percentage: 90%'),
];

// Skills Details
export const SkillsDetails: SkillDetail[] = [
    createSkillDetail("HTML", imageLinks.html),
    createSkillDetail("CSS", imageLinks.css),
    createSkillDetail("JS", imageLinks.javascript),
    createSkillDetail("Typescript", imageLinks.ts),
    createSkillDetail("Tailwind", imageLinks.tailwind),
    createSkillDetail("React", imageLinks.react),
];

// Awards Details
export const AwardsDetails: EducationDetail[] = [
    createEducationDetail("#3 in Campus Code Debugging Competition", '2020', imageLinks.degree, 'Got 3rd Position in campus wide coding competition.'),
];

// Additional Details
export const AdditionalDetails: EducationDetail[] = [
    createEducationDetail("Speaker in Google Developer Club Event", '2022', imageLinks.degree, `I had the opportunity to speak on APIs at a GDSC event, engaging with an enthusiastic audience of 100 attendees!`),
];
