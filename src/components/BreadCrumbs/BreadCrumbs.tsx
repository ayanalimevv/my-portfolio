import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumbItem } from "./BreadCrumbItem";

type Path = string[];
// Breadcrumbs are show in url place and used to easily navigate to different pages.
// shown like this: home > projects > project1
export const BreadCrumbs = () => {
  const location = useLocation();
  const [pathArr, setPathArr] = useState<Path>([]);

  useEffect(() => {
    const { pathname } = location;

    setPathArr(pathname.split("/")); // splits and stores current url in pathArr
  }, [location]);

  return (
    <div className="breadcrumbs text-sm ml-4">
      <ul>
        {/* Display home for base url and other name should be same as path */}
        {pathArr.map((path, index) => {
          return index !== 0 ? (
            <BreadCrumbItem key={`${path}`} path={path} textToDisplay={path} />
          ) : (
            <BreadCrumbItem key={`${path}`} path={"/"} textToDisplay={"home"} />
          );
        })}
      </ul>
    </div>
  );
};
