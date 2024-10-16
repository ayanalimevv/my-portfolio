import { Icon } from "../../components/Icon";
import { HomePageComponents } from "../../constants";

function HomePage() {
  return (
    <>
      {HomePageComponents.map((app, index) => {
        return (
          <div key={index} className="w-full">
            <Icon image={app.image} text={app.name} link={app.link} />
          </div>
        );
      })}
    </>
  );
}

export default HomePage;
