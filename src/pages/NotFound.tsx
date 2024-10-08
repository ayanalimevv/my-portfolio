import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="min-h-[40vh] flex flex-col items-center justify-center gap-2">
            <div className="flex gap-2 justify-center items-center">
                <img src="./error.svg" alt="" />
            </div>
            <span className="font-bold my-2">404! This site can’t be reached</span>
            <Link to={'/'}  className="btn hover:border hover:border-slate-700 hover:shadow">Back to Home</Link>
        </div>
    )
}

export default NotFound