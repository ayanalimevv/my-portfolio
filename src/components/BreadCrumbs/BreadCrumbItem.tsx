import { Link } from "react-router-dom";

export const BreadCrumbItem = ({
  path,
  textToDisplay,
}: {
  path: string;
  textToDisplay: string;
}) => {
  return (
    <li>
      <Link to={`/${path}`} className="bg-slate-400 px-1 bg-opacity-15 rounded">
        {`${textToDisplay}`}
      </Link>
    </li>
  );
};
