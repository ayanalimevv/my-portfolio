import ItemList from "../components/ItemList"
import { EducationDetails } from "../constants"

const EducationPage = () => {
    return (
        <div className="bg-base-200 flex flex-col p-4 gap-2">
            {EducationDetails.map(app => {
                return (
                    <ItemList imageSource='./degree.svg' projectName={app.name} projectLink={app.deployedLink} githubLink={app.githubLink} pageLink={app.pageLink} />
                )
            })}
        </div>
    )
}

export default EducationPage