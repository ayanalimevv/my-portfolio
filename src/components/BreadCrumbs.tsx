import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Breadcrumbs are show in url place and used to easily navigate to different pages.
// shown like this: home > projects > project1
export const BreadCrumbs = () => {
  const location = useLocation();
  const [pathArr, setPathArr] = useState<string[]>([]);

  useEffect(() => {
    const { pathname } = location;

    setPathArr(pathname.split("/")); // splits and stores current url in pathArr
  }, [location]);

  return (
    <div className="breadcrumbs text-sm ml-4">
      <ul>
        {/* First li is default set to '/' */}
        <li>
          <Link to={"/"} className="bg-slate-400 px-1 bg-opacity-15 rounded">
            {`home`}
          </Link>
        </li>

        {/* Url after / is mapped from pathArr */}
        {pathArr.map((path, index) => {
          return index !== 0 ? (
            <li key={index + path}>
              <Link
                to={`/${path}`}
                className="bg-slate-400 px-1 bg-opacity-15 rounded"
              >
                {`${path}`}
              </Link>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};
