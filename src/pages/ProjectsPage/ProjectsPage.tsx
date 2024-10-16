import { Icon } from "../../components/Icon";
import { ProjectLinks } from "../../constants";

function ProjectPage() {
  return (
    <>
      {ProjectLinks.map((app, index) => {
        return (
          <div key={index} className="dropdown dropdown-right">
            <div tabIndex={0} role="button">
              <Icon key={index} image={app.image} text={app.name} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectPage;
