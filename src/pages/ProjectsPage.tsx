import Icon from '../components/Icon'
import { ProjectLinks } from '../constants'

function ProjectPage() {
    return (
        <>
            {ProjectLinks.map((app, index) => {
                return (

                    <div key={index} className="dropdown dropdown-right">
                        <div tabIndex={0} role="button" className="">
                            <Icon key={index} image={app.image} text={app.name} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a href={app.githubLink} target='_blank'><img className='h-4 w-4' src='./github.svg'></img>Github Link</a></li>
                            <li><a href={app.deployedLink} target='_blank'><img className='h-4 w-4' src='./link.svg'></img>Deployed Link</a></li>
                        </ul>
                    </div>

                )
            })}
        </>
    )
}

export default ProjectPage
