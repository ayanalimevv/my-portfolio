import PDFIcon from '../components/Icon'
import { SkillsDetails } from '../constants'

function SkillsPage() {
    return (
        <>
            {SkillsDetails.map((app, index) => {
                return (
                    <PDFIcon key={index} image={app.image} text={app.name} />
                )
            })}
        </>)
}

export default SkillsPage
