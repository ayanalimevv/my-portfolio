import ItemList from "./ItemList"

export const ItemListPage = ({ array }: {
    array: {
        image?: string;
        name: string;
        link?: string;
        aboveText?: string;
        belowText?: string;
    }[]
}) => {
    return (
        <>
            {array.map(app => {
                return (
                    <ItemList imageSource={app.image} projectName={app.name} link={app.link} aboveText={app.aboveText} belowText={app.belowText} />
                )
            })}

        </>
    )
}
