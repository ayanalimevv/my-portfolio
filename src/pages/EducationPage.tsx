import ItemList from "../components/ItemList"
import { EducationDetails } from "../constants"

const EducationPage = () => {
    return (
        <>
            {EducationDetails.map(app => {
                return (
                    <ItemList imageSource={app.image} projectName={app.name} projectLink={app.deployedLink} githubLink={app.githubLink} pageLink={app.pageLink} />
                )
            })}

        </>
    )
}

export default EducationPage