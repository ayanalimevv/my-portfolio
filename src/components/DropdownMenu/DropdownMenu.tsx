import { DropDownItem } from "./DropDownItem";

const DropdownMenu = ({
  githubLink,
  deployedLink,
}: {
  githubLink?: string;
  deployedLink?: string;
}) => {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
    >
      {githubLink && (
        <DropDownItem
          link={githubLink}
          text="Github Link"
          imagePath="github.svg"
          imageAltText="Github Logo"
        />
      )}
      {deployedLink && (
        <DropDownItem
          link={deployedLink}
          text="Deployed Link"
          imagePath="link.svg"
          imageAltText="Link Logo"
        />
      )}
    </ul>
  );
};

export default DropdownMenu;
