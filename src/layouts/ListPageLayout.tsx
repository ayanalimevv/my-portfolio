import { List } from "../components/List/List";

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
      {array ? (
        array.map((item) => {
          return (
            <List
              imageSource={item.image}
              projectName={item.name}
              link={item.link}
              aboveText={item.aboveText}
              belowText={item.belowText}
            />
          );
        })
      ) : (
        <p>Nothing to Show...</p>
      )}
    </>
  );
};
