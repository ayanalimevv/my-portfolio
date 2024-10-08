import ItemList from '../components/ItemList'
import { ProjectLinks } from '../constants'

function ProjectPage() {
    return (
        <div id='projects' className="bg-base-200 flex flex-col p-4 gap-2">
            {ProjectLinks.map((app, index) => {
                return (
                    <ItemList key={index} imageSource='./app.svg' projectName={app.name} projectLink={app.deployedLink} githubLink={app.githubLink} pageLink={app.pageLink} />
                )
            })}
        </div>
    )
}

export default ProjectPage
