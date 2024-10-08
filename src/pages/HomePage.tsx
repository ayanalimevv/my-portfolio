import PDFIcon from '../components/Icon'
import { HomePageComponents } from '../constants'

function HomePage() {

    return (
        <>
            <div className="bg-base-200 flex flex-wrap p-4 gap-2">
                {HomePageComponents.map((app, index) => {
                    return (
                        <div key={index} className="w-[15%]">
                            <PDFIcon image={app.image} text={app.name} link={app.link} />
                        </div>
                    );
                })}
            </div>

        </>
    )
}

export default HomePage
