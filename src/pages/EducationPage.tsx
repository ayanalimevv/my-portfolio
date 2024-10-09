import ItemList from "../components/ItemList"
import { EducationDetails } from "../constants"

const EducationPage = () => {
    return (
        <>
            {EducationDetails.map(app => {
                return (
                    <ItemList imageSource='./degree.svg' projectName={app.name} projectLink={app.deployedLink} githubLink={app.githubLink} pageLink={app.pageLink} />
                )
            })}

        </>
    )
}

export default EducationPage