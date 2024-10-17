import { Icon } from "../../components/Icon/Icon";

function IconPageLayout({
  array,
}: {
  array: { image: string; name: string; link?: string }[];
}) {
  return (
    <>
      {array.map((app) => {
        return <Icon imagePath={app.image} text={app.name} link={app.link} />;
      })}
    </>
  );
}

export default IconPageLayout;
