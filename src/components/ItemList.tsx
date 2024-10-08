import { Link } from "react-router-dom"


const ItemList = ({ projectLink, pageLink, projectName, githubLink, imageSource }:
    {
        projectLink?: string;
        pageLink?: string;
        githubLink?: string;
        projectName: string;
        imageSource?: string;
    }) => {
    return (
        <div className="bg-base-300 w-full p-2 rounded flex items-center hover:bg-opacity-70 hover:-translate-x-1 hover:scale-[1.01] hover:shadow transition-all duration-200 cursor-pointer">
            <img src={imageSource} className="w-8 h-8" alt="" />
            <div className="flex flex-col items-start justify-center text-left ml-4">
                <Link to={pageLink ? pageLink : ''}>{projectName}</Link>
                <span className="text-xs opacity-50 mt-1">20 Nov 2024 - 21 Dec 2028</span>
            </div>
            <div className="ml-auto flex gap-4">
                {githubLink && <Link target="_blank" className="w-4 h-4" to={githubLink}> <img src="./github.svg" className="w-6 h-6" alt="" /></Link>}
                {projectLink && <Link target="_blank" className="w-4 h-4" to={projectLink}> <img src="./link.svg" className="w-6 h-6" alt="" /></Link>}
            </div>
        </div>
    )
}

export default ItemList