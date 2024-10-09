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
        <div className="w-full bg-white bg-opacity-0 border border-white border-opacity-10 p-2 rounded flex items-center  hover:bg-opacity-5 hover:-translate-x-1 hover:scale-[1.01] hover:border-opacity-20 hover:shadow transition-all duration-200 cursor-pointer">
            <img src={imageSource} className="w-8 h-8" alt="" />
            <div className="flex flex-col items-start justify-center text-left ml-4 w-full">
                <div className="flex justify-end items-center w-full">
                    <Link to={pageLink ? pageLink : ''}>{projectName}</Link>
                    <div className="date ml-auto text-xs opacity-50">2020 - 2024</div>
                </div>
                <span className="text-xs opacity-50 mt-1">CGPA: 7.9</span>
            </div>
            <div className="ml-auto flex gap-4">
                {githubLink && <Link target="_blank" className="w-4 h-4" to={githubLink}> <img src="./github.svg" className="w-6 h-6" alt="" /></Link>}
                {projectLink && <Link target="_blank" className="w-4 h-4" to={projectLink}> <img src="./link.svg" className="w-6 h-6" alt="" /></Link>}
            </div>
        </div>
    )
}

export default ItemList