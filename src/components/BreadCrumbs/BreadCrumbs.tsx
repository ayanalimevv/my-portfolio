import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumbItem } from "./BreadCrumbItem";

type PathType = string[]
// Breadcrumbs are show in url place and used to easily navigate to different pages.
// shown like this: home > projects > project1
export const BreadCrumbs = () => {
  const location = useLocation();
  const [pathArr, setPathArr] = useState<PathType>([]);

  useEffect(() => {
    const { pathname } = location;

    setPathArr(pathname.split("/")); // splits and stores current url in pathArr
  }, [location]);

  return (
    <div className="breadcrumbs text-sm ml-4">
      <ul>
        {/* Url after / is mapped from pathArr */}
        
        {pathArr.map((path, index) => {
        {/* Display home for base url and other name should be same as path */}
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
