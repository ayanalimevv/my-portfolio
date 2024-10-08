import PDFIcon from '../components/Icon'
import { SocialLinks } from '../constants'

function Socials() {

    return (


        <div className="bg-base-200 flex p-4 gap-2">
            {SocialLinks.map(app => {
                return (
                    <PDFIcon image={app.image} text={app.name} link={app.link} />
                )
            })}


        </div>

    )
}

export default Socials
