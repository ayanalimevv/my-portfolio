import { Icon } from "../../components/Icon/Icon";

function IconPageLayout({
  itemsToRender,
}: {
  itemsToRender: { image: string; name: string; link?: string }[];
}) {
  return (
    <>
      {itemsToRender.map((item) => {
        return <Icon imagePath={item.image} text={item.name} link={item.link} />;
      })}
    </>
  );
}

export default IconPageLayout;
