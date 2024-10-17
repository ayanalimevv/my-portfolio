import { ListInfo } from "./ListInfo";

export const List = ({
  aboveText,
  link,
  projectName,
  belowText,
  imageSource,
}: {
  aboveText?: string;
  link?: string;
  belowText?: string;
  projectName: string;
  imageSource?: string;
}) => {
  return (
    <div className="w-full bg-white bg-opacity-0 border border-white border-opacity-10 p-2 rounded flex items-center  hover:bg-opacity-5 hover:-translate-x-1 hover:scale-[1.01] hover:border-opacity-20 hover:shadow transition-all duration-200 cursor-pointer">
      <img src={imageSource} className="w-8 h-8" alt="" />

      {/*  Render All text Info part in List */}
      <ListInfo
        aboveText={aboveText}
        belowText={belowText}
        link={link}
        projectName={projectName}
      />
    </div>
  );
};
