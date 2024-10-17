import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import { Icon } from "../../components/Icon/Icon";
import { ProjectLinks } from "../../constants";

function ProjectPage() {
  return (
    <>
      {ProjectLinks.map((app, index) => {
        return (
          <div key={index} className="dropdown dropdown-right">
            <div tabIndex={0} role="button">
              <Icon key={index} imagePath={app.image} text={app.name} />
            </div>
            <DropdownMenu githubLink={app?.githubLink} deployedLink={app?.deployedLink} />
          </div>
        );
      })}
    </>
  );
}

export default ProjectPage;
