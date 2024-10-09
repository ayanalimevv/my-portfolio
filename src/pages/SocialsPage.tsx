import PDFIcon from '../components/Icon'
import { SocialLinks } from '../constants'

function Socials() {

    return (
        <>
            {SocialLinks.map(app => {
                return (
                    <PDFIcon image={app.image} text={app.name} link={app.link} />
                )
            })}
        </>
    )
}

export default Socials
