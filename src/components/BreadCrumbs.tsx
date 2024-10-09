import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
    const location = useLocation();
    const [pathArr, setPathArr] = useState<string[]>([]);

    useEffect(() => {
        const { pathname } = location;
        setPathArr(pathname.split('/'));
    }, [location]);
    return (
        <div className="breadcrumbs text-sm ml-4">
            <ul>
                <li>
                    <Link to={'/'} className="bg-slate-400 px-1 bg-opacity-15 rounded">
                        {`home`}
                    </Link>
                </li>
                {pathArr.map((path, index) => {
                    return (index !== 0 ? <li key={index + path}>
                        <Link to={`/${path}`} className="bg-slate-400 px-1 bg-opacity-15 rounded">
                            {`${path}`}
                        </Link>
                    </li> : null)
                })}
            </ul>
        </div>
    )
}

export default BreadCrumbs