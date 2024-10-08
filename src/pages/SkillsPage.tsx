import PDFIcon from '../components/Icon'
import { SkillsDetails } from '../constants'

function SkillsPage() {
    return (
        <div className="bg-base-200 flex p-4 gap-2">
            {SkillsDetails.map((app, index) => {
                return (
                    <PDFIcon key={index} image={app.image} text={app.name} />
                )
            })}
        </div>
    )
}

export default SkillsPage
