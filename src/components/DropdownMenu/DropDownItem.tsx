import { Link } from "react-router-dom";

export const DropDownItem = ({
  link,
  text,
  imageAltText = "Image Not Found",
  imagePath,
}: {
  link: string;
  text: string;
  imageAltText?: string;
  imagePath: string;
}) => {
  return (
    <li>
      <Link to={link} target="_blank">
        <img alt={imageAltText} className="h-4 w-4" src={`/${imagePath}`}></img>
        {text}
      </Link>
    </li>
  );
};
