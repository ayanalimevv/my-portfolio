import PDFIcon from '../components/Icon'
import { ProjectLinks } from '../constants'

function ProjectPage() {
    return (
        <>
            {ProjectLinks.map((app, index) => {
                return (
                    <PDFIcon key={index} image={app.image} text={app.name} link={app.pageLink} />
                )
            })}
        </>
    )
}

export default ProjectPage
