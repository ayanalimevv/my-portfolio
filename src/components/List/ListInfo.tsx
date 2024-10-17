import { Link } from "react-router-dom";

{/*  Render All text Info part in List */}
export const ListInfo = ({
  projectName,
  aboveText,
  belowText,
  link,
}: {
  projectName: string;
  aboveText?: string;
  belowText?: string;
  link?: string;
}) => {
  return (
    <>
      <div className="flex flex-col items-start justify-center text-left ml-4 w-full">
        <div className="flex justify-end items-center w-full">
          <h1>{projectName}</h1>
          <div className="date ml-auto text-xs opacity-50">{aboveText}</div>
        </div>
        <span className="text-xs opacity-80 bg-slate-600 p-1 bg-opacity-20 rounded mt-1">{belowText}</span>
      </div>
      <div className="ml-auto flex gap-4">
        {link && (
          <Link target="_blank" className="w-4 h-4" to={link}>
            {" "}
            <img src="./link.svg" className="w-6 h-6" alt="" />
          </Link>
        )}
      </div>
    </>
  );
};
