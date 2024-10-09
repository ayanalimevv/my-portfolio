export const ResumeLink = "https://drive.google.com/file/d/1U8daZXQEkn8GSiQo5P-Nb6yhiw_eGXZe/view"

const imageLinks = {
    folder: "./folder_icon.svg",
    pdf: "./pdf-icon.svg",
    x: './x.svg',
    linkedin: './linkedin.svg',
    github: './github.svg',
    medium: './medium.svg',
    app: './app.svg'
}

export const HomePageComponents: { image: string; name: string; link: string }[] = [
    { name: "Blogs", image: imageLinks.folder, link: '/blogs' },
    { name: "Projects", image: imageLinks.folder, link: '/projects' },
    { name: "Socials", image: imageLinks.folder, link: '/socials' },
    { name: "Education", image: imageLinks.folder, link: '/education' },
    { name: "Skills", image: imageLinks.folder, link: '/skills' },
    { name: "Awards", image: imageLinks.folder, link: '/awards' },
    { name: "Additional", image: imageLinks.folder, link: '/additional' },
    { name: "Resume", image: imageLinks.pdf, link: ResumeLink },

]

export const SocialLinks: { name: string; image: string; link: string }[] = [
    { name: "X", image: './x.svg', link: 'https://twitter.com/ayanalimevv' },
    { name: "Linkedin", image: './linkedin.svg', link: 'https://www.linkedin.com/in/ayanalimevv' },
    { name: "Github", image: './github.svg', link: 'https://github.com/alpha2207' },
    { name: "Medium", image: './medium.svg', link: 'https://medium.com/@ayanalimev' },
]

export const ProjectLinks: { name: string; image: string; deployedLink: string; githubLink: string, pageLink: string }[] = [
    { name: "YT Music Clone App", image: './music.svg', deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
    { name: "Typing Speed Calculator", image: './typing.svg', deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
    { name: "Mern Blog Application", image: './blog.svg', deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
    { name: "FilmSuggest App", image: './movies.svg', deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
]

export const EducationDetails: { name: string; image: string; deployedLink: string; githubLink: string, pageLink: string }[] = [
    { name: "Bachelor of Technology", image: './degree.svg', deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
    { name: "HSC 12th RBSE BOARD", image: './hsc.svg', deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
    { name: "SSC 10th RBSE BOARD", image: './ssc.svg', deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
]

export const SkillsDetails: { name: string; image: string }[] = [
    { name: "HTML", image: './html.svg' },
    { name: "CSS", image: './css.svg' },
    { name: "JS", image: './javascript.svg' },
    { name: "Typescript", image: './ts.svg' },
    { name: "Tailwind", image: './tailwind.svg' },
    { name: "React", image: './react.svg' },
]

export const AwardsDetails: { name: string; image: string; deployedLink: string; githubLink: string, pageLink: string }[] = [
    { name: "Bachelor of Technology", image: imageLinks.app, deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
]

export const AdditionalDetails: { name: string; image: string; deployedLink: string; githubLink: string, pageLink: string }[] = [
    { name: "Bachelor of Technology", image: imageLinks.app, deployedLink: 'https://medium.com/@ayanalimev', githubLink: "", pageLink: "" },
]