import { ItemList } from "../components/List";

// Create a array and render ItemList component from that.
export const ItemListPage = ({
  array,
}: {
  array?: {
    image?: string;
    name: string;
    link?: string;
    aboveText?: string;
    belowText?: string;
  }[];
}) => {
  return (
    <>
      {array ? array.map((app) => {
        return (
          <ItemList
            imageSource={app.image}
            projectName={app.name}
            link={app.link}
            aboveText={app.aboveText}
            belowText={app.belowText}
          />
        );
      }) : <p>Nothing to Show...</p>}
    </>
  );
};
